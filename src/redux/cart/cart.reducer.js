import cartTypes from './cart.types';
import { addItemToCart, removeItemFromCart, changeItemAmount } from './cart.utils';

const INITIAL_STATE = {
  items: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case cartTypes.ADD_ITEM:
      return {
        ...state, items: addItemToCart(state.items, action.payload)
      }
    case cartTypes.REMOVE_ITEM:
      return {
        ...state, items: removeItemFromCart(state.items, action.payload)
      }
    case cartTypes.CHANGE_ITEM_AMOUNT: 
      return {
        ...state, items: changeItemAmount(state.items, action.payload)
      }
    default: 
      return state;
  }
}

export default cartReducer;