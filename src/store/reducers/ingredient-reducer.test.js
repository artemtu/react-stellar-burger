import { GET_INGREDIENTS } from "../actions/actions";
import ingredientReducer from "./ingredient-reducer";
import { initialState } from "./ingredient-reducer";


describe("ingredientReducer", () => {
  it("should return the initial state of ingredientOpenReducer ", () => {
    expect(ingredientReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle GET_INGREDIENTS action ", () => {
    const action = {
      type: GET_INGREDIENTS,
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
      data: [
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

      isLoading: false,
    };

    expect(ingredientReducer(initialState, action)).toEqual(expectedState);
  });
});
