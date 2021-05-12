import userTypes from './user.types';

const INITIAL_STATE = {
  user: null,
  error: null
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case userTypes.SIGNIN_EMAIL_SUCCESS:
      return {...state, user: action.payload, error: null}
    case userTypes.SIGNIN_EMAIL_FAILURE:
      return {...state, error: action.payload}
    case userTypes.SIGNOUT:
      return {...state, user: null, error: null}
    case userTypes.REGISTRATION_EMAIL_SUCCESS: 
      return {...state, user: action.payload, error: null}
    case userTypes.REGISTRATION_EMAIL_FAILURE:
      return {...state, error: action.payload}
    default: 
      return state;
  }
}

export default userReducer;