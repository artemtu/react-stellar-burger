import { constructorReducer, initialState } from "./constructor-reducer";
import {
  ADD_BUN,
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  CHANGE_INGREDIENT,
} from "../actions/actions";

describe("constructor-reducer", () => {
  it("should return the initial state of constructor-reducer", () => {
    expect(constructorReducer(undefined, {})).toEqual(initialState);
  });
  it("should ADD_BUN", () => {
    const state = { ...initialState };
    const action = {
      type: ADD_BUN,
      payload: {
        bun: {
          id: "dsfsdf43fe5",
          image: "https://code.s3.yandex.net/react/code/bun-01.png",
          name: "Флюоресцентная булка",
          price: 558,
          type: "bun",
          _constId: "9e6b9d16-bd1e-4032-9741-d5dad233a882",
        },
      },
    };
  });

  it("should ADD_INGREDIENT", () => {
    const action = {
      type: ADD_INGREDIENT,
      payload: {
        ingredients: {
          id: "dsfsdf43fesdfs5",
          image: "https://code.s3.yandex.net/react/code/bun-01.png",
          name: "Какой-то соус",
          price: 51158,
          type: "ingredient",
          _constId: "9e6b9d16-bd1e-4032-9741-d5da2",
        },
      },
    };
  });

  it("should REMOVE_INGREDIENT", () => {
    const state = {
      constructorBurger: {
        bun: [],
        ingredients: [
          {
            id: "dsfsdf43fesdfs5",
            image: "https://code.s3.yandex.net/react/code/bun-01.png",
            name: "Какой-то соус",
            price: 51158,
            type: "ingredient",
            _constId: "9e6b9d16-bd1e-4032-9741-d5da2",
          },
        ],
      },
      isBunDragged: false,
    };

    const action = {
      type: REMOVE_INGREDIENT,
      payload: {
        ingredientId: "9e6b9d16-bd1e-4032-9741-d5da2",
      },
    };

    const newState = constructorReducer(state, action);

    expect(newState).toEqual({
      constructorBurger: {
        bun: [],
        ingredients: [],
      },
      isBunDragged: false,
    });
  });

  it("should CHANGE_INGREDIENT", () => {
    const state = {
      constructorBurger: {
        bun: [],
        ingredients: [
          {
            id: "2",
            image: "https://code.s3.yandex.net/react/code/bun-01.png",
            name: "Какой-то соус",
            price: 58,
            type: "ingredient",
            _constId: "2a",
          },
          {
            id: "1",
            image: "https://code.s3.yandex.net/react/code/bun-01.png",
            name: "Какая-то котлета",
            price: 999,
            type: "ingredient",
            _constId: "1a",
          },
        ],
      },
      isBunDragged: false,
    };

    const action = {
      type: CHANGE_INGREDIENT,
      payload: {
        indexFrom: 0,
        indexTo: 1,
        ingredient: state.constructorBurger.ingredients[0],
      },
    };

    const newState = constructorReducer(state, action);

    expect(newState).toEqual({
      constructorBurger: {
        bun: [],
        ingredients: [
          {
            id: "1",
            image: "https://code.s3.yandex.net/react/code/bun-01.png",
            name: "Какая-то котлета",
            price: 999,
            type: "ingredient",
            _constId: "1a",
          },
          {
            id: "2",
            image: "https://code.s3.yandex.net/react/code/bun-01.png",
            name: "Какой-то соус",
            price: 58,
            type: "ingredient",
            _constId: "2a",
          },
        ],
      },
      isBunDragged: false,
    });
  });
});
