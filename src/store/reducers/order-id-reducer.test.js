import { SET_ORDER_ID } from "../actions/actions";
import { orderIdReducer } from "./order-id-reducer";

describe("orderIdReducer", () => {
  it("should return the initial state", () => {
    expect(orderIdReducer(undefined, {})).toEqual({ orderId: null });
  });

  // Тестирование обработки действия SET_ORDER_ID
  it("should handle SET_ORDER_ID action", () => {
    const mockOrderId = "12345";
    const action = {
      type: SET_ORDER_ID,
      payload: mockOrderId,
    };

    expect(orderIdReducer(undefined, action)).toEqual({ orderId: mockOrderId });
  });
});
