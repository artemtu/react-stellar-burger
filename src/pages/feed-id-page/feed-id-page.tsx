import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./feed-id-page.module.css";
import { useAppDispatch, useAppSelector } from "../../store/types";
import FeedPage from "../../components/feed-id-modal/feed-id-modal";
import { WSS_OPEN, WSS_CLOSE } from "../../store/actions/actions";
import { socketUrl } from "../../store/socketMiddleware";
import { GET_FEED } from "../../store/actions/actions";

function FeedPageTest() {
  const dispatch = useAppDispatch();

  const { id } = useParams();
  const feedData = useAppSelector((state) => state.getFeed.getFeed);

  useEffect(() => {
    dispatch({
      type: WSS_OPEN,
      meta: {
        socket: {
          event: "INIT",
          uri: socketUrl + "/all",
          actionTypes: { message: GET_FEED },
        },
      },
    });

    return () => {
      dispatch({
        type: WSS_CLOSE,
        meta: {
          socket: {
            event: "CLOSE",
            uri: socketUrl + "/all",
          },
        },
      });
    };
  }, [dispatch]);

  if (!feedData) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.page}>
      <FeedPage id={id} key={id} />
    </div>
  );
}

export default FeedPageTest;
