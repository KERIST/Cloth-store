import itemsTypes from './sections.types';

const INITIAL_STATE = {
    loading: false,
    error: false, 
    items: {
        hats: {},
        sneakers: {},
        jackets: {},
        suits: {},
        women: {},
        men: {}
    }
}

const itemsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case itemsTypes.FETCH_ITEMS_START: 
            return {...state, loading: true}
        case itemsTypes.FETCH_ITEMS_SUCCESS:
            return {...state, items: action.payload, loading: false}
        case itemsTypes.FETCH_ITEMS_FAILURE:
            return {...state, error: action.payload, loading: false}
        default: 
            return state;
    }
}

export default itemsReducer;