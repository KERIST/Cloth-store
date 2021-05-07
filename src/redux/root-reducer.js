import { combineReducers } from 'redux';

import directoryReducer from './directory/directory.reducer';
import itemsReducer from './items/items.reducer';
import cartReducer from './cart/cart.reducer';

const rootReducer = combineReducers({
    directory: directoryReducer,
    items: itemsReducer,
    cart: cartReducer
});

export default rootReducer;