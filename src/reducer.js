export const initialState = {
    basket: [],
    user: null
  };
  
  // Selector
  export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);
  
  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "ADD_TO_BASKET":
        return {
          ...state,
          basket: [...state.basket, action.item],
        };
      
      case 'EMPTY_BASKET':
        return {
          ...state,
          basket: []
        }
  
      case "REMOVE_FROM_BASKET":
        // Create a copy of the basket
        const newBasket = [...state.basket];

        // Find the index of the item to remove
        const index = state.basket.findIndex(
            (basketItem) => basketItem.id === action.id
        );

        if (index >= 0) {
            // Remove the item at the found index
            newBasket.splice(index, 1);
        } else {
            console.warn(
                `Can't remove product (id: ${action.id}) as it's not in the basket!`
            );
        }

        console.log("Updated basket:", newBasket);

        return {
            ...state,
            basket: newBasket,
        };
      
      case "SET_USER":
        return {
          ...state,
          user: action.user
        }
  
      default:
        return state;
    }
  };
  
  export default reducer;