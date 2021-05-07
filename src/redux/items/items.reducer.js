import INITAL_STATE from './items.data';

const itemsReducer = (state = INITAL_STATE, action) => {
    switch(action.type) {
        default: return state;
    }
}

export default itemsReducer;