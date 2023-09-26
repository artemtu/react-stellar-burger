import { FORGOT_PASSWORD } from "../actions/actions";
import forgotPasswordReducer from "./forgot-password-reducer";
import { initialState } from "./forgot-password-reducer";

describe("forgot-password-reducer", () => {
  it("should return the initial state of forgotPasswordReducer", () => {
    expect(forgotPasswordReducer(undefined, {})).toEqual(initialState);
  });
  it("should handle FORGOT_PASSWORD action", () => {
    const action = {
      type: FORGOT_PASSWORD,
      payload: {
        success: true,
        message: "Reset email sent",
      },
    };

    const expectedState = {
      isSuccess: true,
      forgotPassword: {
        success: true,
        message: "Reset email sent",
      },
    };

    expect(forgotPasswordReducer(undefined, action)).toEqual(expectedState);
  });
});
