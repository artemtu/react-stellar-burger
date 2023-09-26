import {
  GET_INFO_OPEN_INGREDIENT_MODAL,
  CLEAR_INGREDIENT_OPEN,
} from "../actions/actions";

import ingredientOpenReducer from "./ingredient-open-reducer";
import { initialState } from "./ingredient-open-reducer";
import { bunObject } from "./constants-reducers";



describe("ingredientOpenReducer", () => {
  it("should return the initial state of ingredientOpenReducer ", () => {
    expect(ingredientOpenReducer(undefined, {})).toEqual(initialState);
  });
  it("should handle GET_INFO_OPEN_INGREDIENT_MODAL action ", () => {
    const action = {
      type: GET_INFO_OPEN_INGREDIENT_MODAL,
      payload: [bunObject],
    };

    const expectedState = {
      ingredient: [bunObject],
    };

    expect(ingredientOpenReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle CLEAR_INGREDIENT_OPEN action ", () => {
    const action = {
      type: CLEAR_INGREDIENT_OPEN,
      payload: [bunObject],
    };

    const expectedState = {
      ingredient: [],
    };

    expect(ingredientOpenReducer(initialState, action)).toEqual(expectedState);
  });
});
