import UserActionTypes from './user.types';

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION
});

export const facebookSignInStart = () => ({
  type: UserActionTypes.FACEBOOK_SIGN_IN_START
});

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START
});

export const emailSignInStart = emailAndPassword => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

export const signInSuccess = user => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const signInFailure = error => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error
});

export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = error => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error
});

export const signUpStart = userCredentials => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: userCredentials
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData }
});

export const signUpFailure = error => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error
});

export const updateProfileStart = (userId, profile) => ({
  type: UserActionTypes.UPDATE_PROFILE_START,
  payload: { userId, profile }
});

export const updateProfileSuccess = profile => ({
  type: UserActionTypes.UPDATE_PROFILE_SUCCESS,
  payload: profile
});

export const updateProfileFailure = error => ({
  type: UserActionTypes.UPDATE_PROFILE_FAILURE,
  payload: error
});

export const uploadAvatarStart = (userId, file) => ({
  type: UserActionTypes.UPLOAD_AVATAR_START,
  payload: { userId, file }
});

export const uploadAvatarSuccess = () => ({
  type: UserActionTypes.UPLOAD_AVATAR_SUCCESS
});

export const uploadAvatarFailure = error => ({
  type: UserActionTypes.UPLOAD_AVATAR_FAILURE,
  payload: error
});
