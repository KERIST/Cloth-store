import { createSelector } from 'reselect';

export const selectCartItems = state => state.cart.items;

export const selectCartItemsAmount = createSelector(
  selectCartItems,
  (cartItems) => {
    return cartItems.reduce((acc, next) => acc + next.quantity, 0);
  }
)

export const selectCartItemsTotalPrice = createSelector(
  selectCartItems,
  (cartItems) => {
    return cartItems.reduce((acc, next) => acc + next.price * next.quantity, 0);
  }
)