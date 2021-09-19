const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }
  if (action.type === "REMOVE_ITEM") {
    const newItems = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: newItems };
  }
  //   if (action.type === "INCREASE") {
  //     let newAmount = state.cart.map((item) => {
  //       if (item.id === action.payload) {
  //         return { ...item, amount: item.amount + 1 };
  //       }
  //       return item;
  //     });
  //     return { ...state, cart: newAmount };
  //   }
  //   if (action.type === "DECREASE") {
  //     let newAmount = state.cart
  //       .map((item) => {
  //         if (item.id === action.payload) {
  //           return { ...item, amount: item.amount - 1 };
  //         }
  //         return item;
  //       })
  //       .filter((item) => item.amount !== 0);
  //     return { ...state, cart: newAmount };
  //   }
  if (action.type === "TOGGLE_AMOUNT") {
    let newAmount = state.cart
      .map((item) => {
        if (item.id === action.payload.id) {
          if (action.payload.type === "INC") {
            return { ...item, amount: item.amount + 1 };
          }
          if (action.payload.type === "DEC") {
            return { ...item, amount: item.amount - 1 };
          }
        }
        return item;
      })
      .filter((item) => item.amount !== 0);
    return { ...state, cart: newAmount };
  }
  if (action.type === "GET_TOTAL") {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;
        cartTotal.total += itemTotal;
        cartTotal.amount += amount;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, amount, total };
  }
  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }
  if (action.type === "DISPLAY_ITEMS") {
    return { ...state, cart: action.payload, loading: false };
  }
  return state;
};

export default reducer;
