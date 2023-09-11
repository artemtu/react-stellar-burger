import { OPEN_FEED_MODAL, CLOSE_FEED_MODAL } from "./actions";

export const openFeedModal = (id) => ({
    type: OPEN_FEED_MODAL,
    payload: id,
  });
  
  export const closeFeedModal = () => ({
    type: CLOSE_FEED_MODAL,
  });