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
      payload: [bunObject],
    };

    const expectedState = {
      data: [bunObject],

      isLoading: false,
    };

    expect(ingredientReducer(initialState, action)).toEqual(expectedState);
  });
});
