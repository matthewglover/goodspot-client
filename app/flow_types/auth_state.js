export type LoggedInState = {
  status: 'loggedIn',
  jwt: string,
  credentials: Object,
};

export type LoggingInState = {
  status: 'loggingIn',
};

export type LoggedOutState = {
  status: 'loggedOut',
};

export type LoginFailureState = {
  status: 'loginFailure',
  err: Error,
};

export type AuthState =
  LoggedInState |
  LoggingInState |
  LoggedOutState |
  LoginFailureState;

export type AuthReducer = (state: ?AuthState, action: Object) => AuthState;
