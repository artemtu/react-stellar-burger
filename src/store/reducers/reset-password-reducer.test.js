import { RESET_PASSWORD } from "../actions/actions";
import resetPasswordReducer from "./reset-password-reducer";

describe("resetPasswordReducer", () => {
  it("should return the initial state", () => {
    expect(resetPasswordReducer(undefined, {})).toEqual({});
  });

  it("should handle RESET_PASSWORD action", () => {
    const mockResetPasswordData = {
      success: true,
      message: "Password reset successfully",
    };
    const action = {
      type: RESET_PASSWORD,
      payload: mockResetPasswordData,
    };

    expect(resetPasswordReducer(undefined, action)).toEqual({
      resetPassword: mockResetPasswordData,
    });
  });
});
