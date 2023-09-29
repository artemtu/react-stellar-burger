import { GET_PROFILE_INFO } from "../actions/actions";
import profileInfoReducer from "./get-profile-info-reducer";
import { initialState } from "./get-profile-info-reducer";
import { profileInfo } from "./constants-reducers";

describe("get-profile-info-reducer", () => {
  it("should return the initial state of get-profile-info-reducer", () => {
    expect(profileInfoReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle GET_PROFILE_INFO action", () => {
    const action = {
      type: GET_PROFILE_INFO,
      payload: profileInfo,
  
    };

    const expectedState = {
      profileInfo: profileInfo,
    };

    expect(profileInfoReducer(initialState, action)).toEqual(expectedState);
  });
});
