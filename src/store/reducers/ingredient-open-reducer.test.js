import {
  GET_INFO_OPEN_INGREDIENT_MODAL,
  CLEAR_INGREDIENT_OPEN,
} from "../actions/actions";

import ingredientOpenReducer from "./ingredient-open-reducer";
import { initialState } from "./ingredient-open-reducer";



describe("ingredientOpenReducer", () => {
  it("should return the initial state of ingredientOpenReducer ", () => {
    expect(ingredientOpenReducer(undefined, {})).toEqual(initialState);
  });
  it("should handle GET_INFO_OPEN_INGREDIENT_MODAL action ", () => {
    const action = {
      type: GET_INFO_OPEN_INGREDIENT_MODAL,
      payload: [
        {
          _id: "11ааfdsf",
          name: "Какая-то булка",
          type: "bun",
          proteins: 44,
          fat: 26,
          carbohydrates: 85,
          calories: 643,
          price: 988,
          image: "https://code.s3.yandex.net/react/code/bun-01.png",
          image_mobile:
            "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
          image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
          __v: 0,
        },
      ],
    };

    const expectedState = {
      ingredient: [
        {
          _id: "11ааfdsf",
          name: "Какая-то булка",
          type: "bun",
          proteins: 44,
          fat: 26,
          carbohydrates: 85,
          calories: 643,
          price: 988,
          image: "https://code.s3.yandex.net/react/code/bun-01.png",
          image_mobile:
            "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
          image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
          __v: 0,
        },
      ],
    };

    expect(ingredientOpenReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle CLEAR_INGREDIENT_OPEN action ", () => {
    const action = {
      type: CLEAR_INGREDIENT_OPEN,
      payload: [
        {
          _id: "11ааfdsf",
          name: "Какая-то булка",
          type: "bun",
          proteins: 44,
          fat: 26,
          carbohydrates: 85,
          calories: 643,
          price: 988,
          image: "https://code.s3.yandex.net/react/code/bun-01.png",
          image_mobile:
            "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
          image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
          __v: 0,
        },
      ],
    };

    const expectedState = {
      ingredient: [],
    };

    expect(ingredientOpenReducer(initialState, action)).toEqual(expectedState);
  });
});
