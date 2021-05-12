import { combineReducers } from 'redux';

import directoryReducer from './directory/directory.reducer';
import itemsReducer from './sections/sections.reducer';
import cartReducer from './cart/cart.reducer';
import userReducer from './user/user.reducer';

const rootReducer = combineReducers({
    directory: directoryReducer,
    sections: itemsReducer,
    cart: cartReducer,
    user: userReducer
});

export default rootReducer;