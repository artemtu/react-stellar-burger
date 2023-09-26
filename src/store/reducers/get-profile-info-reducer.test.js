import { GET_PROFILE_INFO } from "../actions/actions";
import profileInfoReducer from "./get-profile-info-reducer";
import { initialState } from "./get-profile-info-reducer";

describe("get-profile-info-reducer", () => {
  it("should return the initial state of get-profile-info-reducer", () => {
    expect(profileInfoReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle GET_PROFILE_INFO action", () => {
    const action = {
      type: GET_PROFILE_INFO,
      payload: {
        success: true,
        user: {
          name: "John",
          email: "john@example.com",
        },
      },
    };

    const expectedState = {
      profileInfo: {
        success: true,
        user: {
          name: "John",
          email: "john@example.com",
        },
      },
    };

    expect(profileInfoReducer(initialState, action)).toEqual(expectedState);
  });
});
