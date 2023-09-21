import { REGISTER_USER } from "../actions/actions";
import registerUserReducer from "./register-user-reducer";

describe("registerUserReducer", () => {
  it("should return the initial state", () => {
    expect(registerUserReducer(undefined, {})).toEqual({});
  });

  // Тестирование обработки действия REGISTER_USER
  it("should handle REGISTER_USER action", () => {
    const mockRegisterUserData = { username: "test", password: "password" };
    const action = {
      type: REGISTER_USER,
      payload: mockRegisterUserData,
    };

    expect(registerUserReducer(undefined, action)).toEqual({
      registerUser: mockRegisterUserData,
    });
  });
});
