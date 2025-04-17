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
        console.log("REMOVE_FROM_BASKET action:", action);
        const index = state.basket.findIndex((basketitem) => basketitem.id === action.id);
        let newBasket = [...state.basket];
    
        if (index >= 0) {
          console.log("Item found. Removing item:", state.basket[index]);
          newBasket.splice(index, 1); // Remove the item at the found index
        } else {
          console.warn(`Can't remove product (id: ${action.id}) as it's not in the basket!`);
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