export default function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE':
      return {
        ...state,
        open: !state.open,
      };

    case 'ADD': {
      const item = action.payload;
      const itemIndex = state.order.findIndex(
        (orderItem) => orderItem.mainId === item.mainId,
      );

      if (itemIndex < 0) {
        const newItem = { ...item, quantity: 1 };
        return {
          ...state,
          order: [...state.order, newItem],
        };
      }
      const newOrder = state.order.map((orderItem, index) =>
        index === itemIndex
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem,
      );
      return {
        ...state,
        order: newOrder,
      };
    }

    case 'REMOVE': {
      const item = action.payload;
      return {
        ...state,
        order: state.order.filter(
          (orderItem) => orderItem.mainId !== item.mainId,
        ),
      };
    }

    case 'PLUS': {
      const item = action.payload;
      return {
        ...state,
        order: state.order.map((orderItem) =>
          orderItem.mainId === item.mainId
            ? { ...orderItem, quantity: orderItem.quantity + 1 }
            : orderItem,
        ),
      };
    }

    case 'MINUS': {
      const item = action.payload;
      return {
        ...state,
        order: state.order
          .map((orderItem) =>
            orderItem.mainId === item.mainId
              ? { ...orderItem, quantity: orderItem.quantity - 1 }
              : orderItem,
          )
          .filter((orderItem) => orderItem.quantity > 0),
      };
    }

    case 'LANGUAGE':
      return {
        ...state,
        language: action.payload,
      };

    case 'SET_GOODS':
      return {
        ...state,
        goods: action.payload,
      };

    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
}
