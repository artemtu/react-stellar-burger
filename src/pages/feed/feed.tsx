import React from "react";
import styles from "./feed.module.css";
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { fetchFeed } from "../../store/actions/feed";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import IngredientsLine from "../../components/ingredient-line/ingredient-line";

function Feed() {
  const today = new Date();
  const yesterday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 1,
    today.getHours(),
    today.getMinutes() - 1,
    0
  );

  const dispatch = useDispatch();
  const [totalOrdersAll, setTotalOrders] = React.useState("");
  const [totalOrdersToday, setTotalOrdersToday] = React.useState("");
  const [orderIsReady, setOrderIsReady] = React.useState([]);
  const [orderIsPending, setOrderIsPending] = React.useState([]);
  const [orderNumber, setOrderNumber] = React.useState([]);

  useEffect(() => {
    //@ts-ignore
    dispatch(fetchFeed());
  }, []);

  //@ts-ignore
  const totalOrders = useSelector((state) => state.getFeed.getFeed);

  useEffect(() => {
    if (totalOrders) {
      //@ts-ignore
      setTotalOrders(totalOrders.total);
      //@ts-ignore
      setTotalOrdersToday(totalOrders.totalToday);
    }
  }, [totalOrders]);

  //@ts-ignore
  const isReady = useSelector((state) => state.getFeed.getFeed);
  // .filter((item) => item.status === "done")
  // .map((item) => item.number);

  // pending

  //@ts-ignore
  const isPending = useSelector((state) => state.getFeed.getFeed);
  //@ts-ignore
  const orderNum = useSelector((state) => state.getFeed.getFeed);

  useEffect(() => {
    if (isPending) {
      //@ts-ignore
      setOrderIsPending(
        isPending.orders
          //@ts-ignore
          .filter((item) => item.status === "pending")
          //@ts-ignore
          .map((item) => item.number)
      );
    }
  }, [isPending]);

  useEffect(() => {
    if (isReady) {
      //@ts-ignore
      setOrderIsReady(
        isReady.orders
          //@ts-ignore
          .filter((item) => item.status === "done")
          //@ts-ignore
          .map((item) => item.number)
      );
    }
  }, [isReady]);

  useEffect(() => {
    if (orderNum) {
      //@ts-ignore
      setOrderNumber(
        orderNum.orders
          //@ts-ignore
          // .map((item) => item.number)
      );
    }
  }, [orderNum]);


  

  //@ts-ignore
  // const test = orderNum.forEach(item => {
  //   const name = item.name
  //   console.log(name);  
  // });

  // console.log(test);
  
  



  return (

    <section className={`${styles.content} mt-10 mr-30`}>
      <h1 className="text text_type_main-large">Лента заказов</h1>
      
      <IngredientsLine/>
  
      {/* вторая часть страницы */}

      <section className="ml-15">
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
