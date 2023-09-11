import React from "react";
import Header from "../../components/app-header/app-header";
import Main from "../../components/main/main";
import Modal from "../../components/modal/modal";
import IngredientDetails from "../../components/modal/ingredient-details/ingredient-details";
import OrderDetails from "../../components/modal/order-details/orderdetails";
import { useState } from "react";
import styles from "./home.module.css";
import FeedPage from "../../components/modal/feed-id/feed-id";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { openFeedModal, closeFeedModal } from "../../store/actions/feed-modal";
import IngredientsLine from "../../components/ingredient-line/ingredient-line";
import { useEffect } from "react";
import Feed from "../feed/feed";

function Home() {
  const dispatch = useDispatch();

  // const [isFeedModalOpenLocal, setIsFeedModalOpenLocal] = useState(false);
  // const [feedModalIdLocal, setFeedModalIdLocal] = useState(null);

  // const isFeedModalOpen = useSelector((state) => state.modal?.isFeedModalOpen);
  // const feedModalId = useSelector((state) => state.modal?.feedModalId);

  // useEffect(() => {
  //   if (isFeedModalOpen !== null && isFeedModalOpen !== undefined) {
  //     setIsFeedModalOpenLocal(isFeedModalOpen);
  //   }
  //   if (feedModalId !== null && feedModalId !== undefined) {
  //     setFeedModalIdLocal(feedModalId);
  //   }
  // }, [isFeedModalOpen, feedModalId]);

  const [isOrderModal, setOrderModal] = useState({
    open: false,
  });
  const [isIngredientModal, setIngredientModal] = useState({
    open: false,
    id: 1,
  });

  // //@ts-ignore
  // const handleOpenFeedModal = (id) => {
  //   //@ts-ignore
  //   // dispatch(openFeedModal(id));
  //   setIsFeedModalOpenLocal(true)
  // };

  // const handleCloseModal = () => {
  //   //@ts-ignore
  //   dispatch(closeFeedModal());
  // };

  function closeModal() {
    setOrderModal({ open: false });
    setIngredientModal({ open: false, id: 1 });
  }

  function openModal() {
    setOrderModal({ open: true });
  }

  return (
    <div className={styles.app}>
      <Main
        setOrderModal={setOrderModal}
        //@ts-ignore
        setIngredientModal={setIngredientModal}
        openModal={openModal}
      />
      {isOrderModal.open && (
        <Modal closeModal={closeModal}>
          <OrderDetails />
        </Modal>
      )}
      {isIngredientModal.open && (
        <Modal closeModal={closeModal}>
          <IngredientDetails id={isIngredientModal.id} />
        </Modal>
      )}
      {/* {isFeedModalOpenLocal && (
        <Modal closeModal={handleCloseModal}>
          <FeedPage id={feedModalId}/>
        </Modal>
      )} */}
    </div>
  );
}

export default Home;
