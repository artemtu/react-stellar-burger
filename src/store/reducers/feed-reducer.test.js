import { GET_FEED } from "../actions/actions";
import feedReducer from "./feed-reducer";

describe("feed-reducer", () => {
  it("should return the initial state of feed-reducer", () => {
    expect(feedReducer(undefined, {})).toEqual({
      getFeed: {
        success: false,
        orders: [],
        total: "",
        totalToday: "",
      },
    });
  });

  it("should GET_FEED", () => {
    const initialState = {
      getFeed: {
        success: false,
        orders: [],
        total: "",
        totalToday: "",
      },
    };
    const action = {
      type: GET_FEED,
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
