import userTypes from './user.types';

export const signInWithEmailStart = ({ email, password }) => ({
  type: userTypes.SIGNIN_EMAIL_START,
  payload: { email, password }
});

export const signInWithEmailSuccess = (user) => ({
  type: userTypes.SIGNIN_EMAIL_SUCCESS,
  payload: user
});

export const signInWithEmailFailure = (error) => ({
  type: userTypes.SIGNIN_EMAIL_FAILURE,
  payload: error
});

export const signOut = () => ({
  type: userTypes.SIGNOUT
});

export const registrationWithEmailStart = ({ name, email, password }) => ({
  type: userTypes.REGISTRATION_EMAIL_START,
  payload: { name, email, password }
});

export const registrationWithEmailSuccess = (user) => ({
  type: userTypes.REGISTRATION_EMAIL_SUCCESS,
  payload: user
});

export const registrationWithEmailFailure = (error) => ({
  type: userTypes.SIGNIN_EMAIL_FAILURE,
  payload: error
});