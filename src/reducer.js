// filepath: c:\Users\priya\OneDrive\Desktop\react\amazon-clone\src\reducer.js
export const initialState = {
    basket: [], // Initial state for the basket
};

// Selector function to calculate the total price of items in the basket
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            // Logic for adding item to basket
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        default:
            return state;
    }
};

export default reducer;
