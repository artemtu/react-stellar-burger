import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./feed-id-page.module.css";
import { useAppDispatch, useAppSelector } from "../../store/types";
import FeedPage from "../../components/feed-id-modal/feed-id-modal";

function FeedPageTest() {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const feedData = useAppSelector((state) => state.getFeed.getFeed);

  useEffect(() => {
    dispatch({ type: "WS_FEED_INIT" });

    return () => {
      dispatch({ type: "WS_FEED_CLOSE" });
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
