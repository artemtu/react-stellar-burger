import { SET_MY_ORDER_ID } from "../actions/actions";
import { myOrderIdReducer } from "./my-order-id-reducer";
const initialState = {
  myOrderId: null,
};

describe("myOrderIdReducer", () => {
  it("should return the initial state of myOrderIdReducer ", () => {
    expect(myOrderIdReducer(undefined, {})).toEqual(initialState);
  });
  it("should handle SET_AUTH_CHEKCED action ", () => {
    const action = {
      type: SET_MY_ORDER_ID,
      payload: 11,
    };

    const expectedState = {
      myOrderId: 11,
    };

    expect(myOrderIdReducer(initialState, action)).toEqual(expectedState);
  });
});
