import { SET_MY_ORDER_ID } from "../actions/actions";
import { myOrderIdReducer } from "./my-order-id-reducer";
import { initialState } from "./my-order-id-reducer";

describe("myOrderIdReducer", () => {
  it("should return the initial state of myOrderIdReducer ", () => {
    expect(myOrderIdReducer(undefined, {})).toEqual(initialState);
  });
  it("should handle SET_MY_ORDER_ID action ", () => {
    const action = {
      type: SET_MY_ORDER_ID,
      payload: "11",
    };

    const expectedState = {
      myOrderId: "",
      myOrderIdRed: "11",
    };

    expect(myOrderIdReducer(initialState, action)).toEqual(expectedState);
  });
});
