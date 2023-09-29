import { LOGIN_USER } from "../actions/actions";
import { SET_AUTH_CHEKCED } from "../actions/actions";
import loginUserReducer from "./login-user-reducer";
import { initialState } from "./login-user-reducer";

describe("loginUserReducer", () => {
  it("should return the initial state of loginUserReducer ", () => {
    expect(loginUserReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle SET_AUTH_CHEKCED action ", () => {
    const action = {
      type: SET_AUTH_CHEKCED,
      payload: { isAuthChecked: true },
    };

    const expectedState = {
      ...initialState,
      isAuthChecked: true,
    };

    expect(loginUserReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle LOGIN_USER action ", () => {
    const mockUser = {
      success: true,
      accessToken: "someToken",
      refreshToken: "someRefreshToken",
      user: {
        email: "test@example.com",
        name: "John",
      },
    };
    const action = {
      type: LOGIN_USER,
      payload: mockUser,
    };

    const expectedState = {
      loginUser: mockUser,
      isAuthChecked: true,
    };

    expect(loginUserReducer(initialState, action)).toEqual(expectedState);
  });
});
