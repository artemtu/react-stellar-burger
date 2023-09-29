import { GET_INGREDIENTS } from "../actions/actions";
import ingredientReducer from "./ingredient-reducer";
import { initialState } from "./ingredient-reducer";
import { bunObject } from "./constants-reducers";

describe("ingredientReducer", () => {
  it("should return the initial state of ingredientOpenReducer ", () => {
    expect(ingredientReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle GET_INGREDIENTS action ", () => {
    const action = {
      type: GET_INGREDIENTS,
      payload: { data: [bunObject], success: true },
    };

    const expectedState = {
      mainData: {
        data: [bunObject],
        success: true,
      },
    };

    expect(ingredientReducer(initialState, action)).toEqual(expectedState);
  });
});
