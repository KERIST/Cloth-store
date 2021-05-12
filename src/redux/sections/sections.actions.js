import itemsTypes from './sections.types';

export const fetchItemsStart = () => ({
  type: itemsTypes.FETCH_ITEMS_START
});

export const fetchItemsSuccess = items => ({
  type: itemsTypes.FETCH_ITEMS_SUCCESS,
  payload: items
});

export const fetchItemsFailure  = error => ({
  type: itemsTypes.FETCH_ITEMS_FAILURE,
  payload: error
});