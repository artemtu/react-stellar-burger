import { GET_MY_FEED } from "../actions/actions";
import feedMyReducer from "./feed-user-reducer";

describe("feed-user-reducer", () => {
  it("should return the initial state of feed-user-reducer", () => {
    expect(feedMyReducer(undefined, {})).toEqual({
      getMyFeed: {
        success: false,
        orders: [],
        total: "",
        totalToday: "",
      },
    });
  });

  it("should GET_MY_FEED", () => {
    const initialState = {
      getFeed: {
        success: false,
        orders: [],
        total: "",
        totalToday: "",
      },
    };
    const action = {
      type: GET_MY_FEED,
      payload: {
        getFeed: {
          success: true,
          orders: [
            {
              _id: "650b24c36d2997001caa9e6b",
              ingredients: ["650b24c36d2997001caab"],
              status: "done",
              name: "Краторный бургер",
              createdAt: "2023-09-20T16:58:43.823Z",
              updatedAt: "2023-09-20T16:58:44.085Z",
              number: 21230,
            },
          ],
          total: "11",
          totalToday: "111",
        },
      },
    };
  });
});
