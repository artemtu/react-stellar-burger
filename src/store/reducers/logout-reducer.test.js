import { LOGOUT } from "../actions/actions";
import logoutReducer from "./logout-reducer";

const initialState = {};

describe("logoutReducer", () => {
  it("should return the initial state of logoutReducer ", () => {
    expect(logoutReducer(undefined, {})).toEqual(initialState);
  });
  it("should handle LOGOUT action", () => {
    const action = {
      type: LOGOUT,
      payload: {
        logout: {
          success: true,
          message: "Successful logout",
        },
      },
    };

    const expectedState = {
      logout: action.payload,
    };

    expect(logoutReducer(initialState, action)).toEqual(expectedState);
  });
});
