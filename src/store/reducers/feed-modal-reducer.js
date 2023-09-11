import { OPEN_FEED_MODAL, CLOSE_FEED_MODAL } from "../actions/actions";

const initialState = {
    isFeedModalOpen: false,
    feedModalId: null,
  };
  
  const feedModalReducer = (state = initialState, action) => {
    switch (action.type) {
      case OPEN_FEED_MODAL:
        return {
          ...state,
          isFeedModalOpen: true,
          feedModalId: action.payload,
        };
      case CLOSE_FEED_MODAL:
        return {
          ...state,
          isFeedModalOpen: false,
          feedModalId: null,
        };
      default:
        return state;
    }
  };
  
  export default feedModalReducer;
  