import React from "react";
import styles from "./feed.module.css";
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { fetchFeed } from "../../store/actions/feed-all-orders";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import IngredientsLine from "../../components/ingredient-line/ingredient-line";
import { useState } from "react";
import Modal from "../../components/modal/modal";
import FeedPage from "../../components/feed-id-modal/feed-id-modal";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/types";

function Feed() {
  const dispatch = useAppDispatch();
  const [totalOrdersAll, setTotalOrders] = React.useState("");
  const [totalOrdersToday, setTotalOrdersToday] = React.useState("");
  const [orderIsReady, setOrderIsReady] = React.useState([]);
  const [orderIsPending, setOrderIsPending] = React.useState([]);
  const [orderNumber, setOrderNumber] = React.useState([]);

  useEffect(() => {
    const closeSocket = dispatch(fetchFeed());

    return () => {
      closeSocket();
    };
  }, [dispatch]);

  const [isFeedIdModal, setIsFeedIdModal] = useState({ open: false, id: 1 });

  // const { id } = useParams();

  // useEffect(() => {
  //   dispatch(fetchFeed());
  // }, [dispatch]);

  //@ts-ignore
  const totalOrders = useAppSelector((state) => state.getFeed.getFeed);

  useEffect(() => {
    if (totalOrders) {
      setTotalOrders(totalOrders.total);

      setTotalOrdersToday(totalOrders.totalToday);
    }
  }, [totalOrders]);

  //@ts-ignore
  const isReady = useAppSelector((state) => state.getFeed.getFeed);
  // .filter((item) => item.status === "done")
  // .map((item) => item.number);

  // pending

  //@ts-ignore
  const isPending = useAppSelector((state) => state.getFeed.getFeed);
  //@ts-ignore
  const orderNum = useAppSelector((state) => state.getFeed.getFeed);

  useEffect(() => {
    if (isPending) {
      setOrderIsPending(
        isPending.orders
          .filter((item) => item.status === "pending")
          .map((item) => item.number)
      );
    }
  }, [isPending]);

  useEffect(() => {
    if (isReady) {
      setOrderIsReady(
        isReady.orders
          .filter((item) => item.status === "done")
          .map((item) => item.number)
      );
    }
  }, [isReady]);

  useEffect(() => {
    if (orderNum) {
      setOrderNumber(orderNum.orders);
    }
  }, [orderNum]);

  // function openModal() {
  //   setIsFeedIdModal({ open: true, id: 1 });
  // }

  function closeModal() {
    setIsFeedIdModal({ open: false, id: 1 });
  }

  return (
    <section className={`${styles.content} mt-10 mr-30`}>
      <div className={styles.menuBar}>
        <h1 className="text text_type_main-large">Лента заказов</h1>
        <IngredientsLine setIsFeedIdModal={setIsFeedIdModal} />
      </div>

      {/* вторая часть страницы */}
      {isFeedIdModal.open && (
        <Modal closeModal={closeModal}>
          <FeedPage />
        </Modal>
      )}

      <section className={`${styles.testik}`}>
        <div className={styles.readynWork}>
          <div className="mr-9 mb-15">
            <h3 className="text text_type_main-medium mt-6 mb-6">Готовы:</h3>
            <div className={`${styles.containerReady} custom-scroll`}>
              {orderIsReady.map((item, index) => (
                <p
                  className={`${styles.orderIsReady} text text_type_digits-default mb-2`}
                  key={index}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text text_type_main-medium mt-6 mb-6">В работе:</h3>
            <div className={`${styles.containerReady} custom-scroll`}>
              {orderIsPending.map((item, index) => (
                <p className="text text_type_digits-default mb-2" key={index}>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-15">
          <p className="text text_type_main-medium">Выполнено за все время:</p>
          <p className="text text_type_digits-large">{totalOrdersAll}</p>
        </div>

        <div>
          <p className="text text_type_main-medium">Выполнено за сегодня:</p>
          <p className="text text_type_digits-large">{totalOrdersToday}</p>
        </div>
      </section>
    </section> // конец все страницы (контента)
  );
}

export default Feed;
