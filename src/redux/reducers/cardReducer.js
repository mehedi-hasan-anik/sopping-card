const cardReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CARD": {
      const newState = {
        ...state,
        selectedProduct: action.payload,
      };
      return newState;
    }

    default: {
      return state;
    }
  }
};

export default cardReducer;
