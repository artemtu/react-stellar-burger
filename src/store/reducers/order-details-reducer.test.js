import { GET_ORDER_NUMBER } from "../actions/actions";
import orderDetailReducer from "./order-details-reducer";

const initialState = {
  orderDetails: {
    success: false,
    name: "",
    order: {
      ingredients: [],
      _id: "",
      owner: {
        name: "",
        email: "",
        createdAt: "",
        updatedAt: "",
      },
      status: "",
      name: "",
      createdAt: "",
      updatedAt: "",
      number: null,
      price: null,
    },
  },
};

describe("orderDetailReducer", () => {
  it("should return the initial state of orderDetailReducer ", () => {
    expect(orderDetailReducer(undefined, {})).toEqual(initialState);
  });
  it("should handle GET_ORDER_NUMBER action", () => {
    const mockOrderDetails = {
      success: true,
      name: "Mock Order",
      order: {
        ingredients: [
          {
            id: "mockId",
            name: "mockIngredient",
            type: "mockType",
            proteins: 10,
            fat: 10,
            calories: 100,
            carbohydrates: 10,
            image: "mockImage",
            image_large: "mockImageLarge",
            image_mobile: "mockImageMobile",
            price: 10,
          },
        ],
        _id: "mockOrderId",
        owner: {
          name: "mockOwnerName",
          email: "mockOwnerEmail",
          createdAt: "mockCreatedAt",
          updatedAt: "mockUpdatedAt",
        },
        status: "mockStatus",
        name: "mockName",
        createdAt: "mockCreatedAt",
        updatedAt: "mockUpdatedAt",
        number: 1,
        price: 10,
      },
    };

    const action = {
      type: GET_ORDER_NUMBER,
      payload: mockOrderDetails,
    };

    expect(orderDetailReducer(undefined, action)).toEqual({
      orderDetails: mockOrderDetails,
    });
  });
});
