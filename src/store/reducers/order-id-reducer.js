const initialState = {
  orderId: null,
};

export const orderIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ORDER_ID':
      return { ...state, orderId: action.payload };
    default:
      return state;
  }
};
