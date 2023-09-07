import React from "react";
import styles from "./feed.module.css";
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { fetchFeed } from "../../store/actions/feed";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";

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

  return (
    <section className={`${styles.content} mt-10 mr-30`}>
      <h1 className="text text_type_main-large">Лента заказов</h1>
      <div className={`${styles.scroll} custom-scroll mt-6 pr-2`}>
        <div className={`${styles.numberDate} mt-6`}>
          <p className="text text_type_digits-default"> #03402304</p>
          <FormattedDate
            date={yesterday}
            className="text text_type_main-default text_color_inactive"
          />
        </div>
        <p className="text text_type_main-medium mt-6">
          Death Star Starship Main Burger
        </p>
        <div className={`${styles.container} mt-6`}>
          <div className={styles.test}>
            <div className={styles.ingredients}>
              <img
                src="https://code.s3.yandex.net/react/code/bun-02-mobile.png"
                alt=""
                className={styles.ingredientPosition}
              />
            </div>
            <div className={`${styles.orderWrap} `}>
              <img
                src="https://code.s3.yandex.net/react/code/bun-02-mobile.png"
                alt=""
                className={styles.ingredientPosition}
              />
            </div>
            <div className={styles.orderWrap}>
              <img
                src="https://code.s3.yandex.net/react/code/bun-02-mobile.png"
                alt=""
                className={styles.ingredientPosition}
              />
            </div>
          </div>

          <div className={`${styles.totalPrice} mt-6`}>
            <p className="text text_type_digits-default mr-2">480440</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>

        <div className={`${styles.numberDate} mt-6`}>
          <p className="text text_type_digits-default"> #034dsfsdf4</p>
          <FormattedDate
            date={yesterday}
            className="text text_type_main-default text_color_inactive"
          />
        </div>
        <p className="text text_type_main-medium mt-6">LolBurger</p>
        <div className={`${styles.container} mt-6`}>
          <div className={styles.test}>
            <div className={styles.ingredients}>
              <img
                src="https://code.s3.yandex.net/react/code/bun-02-mobile.png"
                alt=""
                className={styles.ingredientPosition}
              />
            </div>
            <div className={styles.orderWrap}>
              <img
                src="https://code.s3.yandex.net/react/code/bun-02-mobile.png"
                alt=""
                className={styles.ingredientPosition}
              />
            </div>
            <div className={styles.orderWrap}>
              <img
                src="https://code.s3.yandex.net/react/code/bun-02-mobile.png"
                alt=""
                className={styles.ingredientPosition}
              />
            </div>
          </div>

          <div className={`${styles.totalPrice} mt-6`}>
            <p className="text text_type_digits-default mr-2">4800</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
        <div className={`${styles.numberDate} mt-6`}>
          <p className="text text_type_digits-default"> #03402304</p>
          <FormattedDate
            date={yesterday}
            className="text text_type_main-default text_color_inactive"
          />
        </div>
        <p className="text text_type_main-medium mt-6">
          Death Star Starship Main Burger
        </p>
        <div className={`${styles.container} mt-6`}>
          <div className={styles.test}>
            <div className={styles.ingredients}>
              <img
                src="https://code.s3.yandex.net/react/code/bun-02-mobile.png"
                alt=""
                className={styles.ingredientPosition}
              />
            </div>
            <div className={styles.orderWrap}>
              <img
                src="https://code.s3.yandex.net/react/code/bun-02-mobile.png"
                alt=""
                className={styles.ingredientPosition}
              />
            </div>
            <div className={styles.orderWrap}>
              <img
                src="https://code.s3.yandex.net/react/code/bun-02-mobile.png"
                alt=""
                className={styles.ingredientPosition}
              />
            </div>
          </div>

          <div className={`${styles.totalPrice} mt-6`}>
            <p className="text text_type_digits-default mr-2">4800</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>

        <div className={`${styles.numberDate} mt-6`}>
          <p className="text text_type_digits-default"> #03402304</p>
          <FormattedDate
            date={yesterday}
            className="text text_type_main-default text_color_inactive"
          />
        </div>
        <p className="text text_type_main-medium mt-6">Kekburger</p>
        <div className={`${styles.container} mt-6`}>
          <div className={styles.test}>
            <div className={styles.ingredients}>
              <img
                src="https://code.s3.yandex.net/react/code/bun-02-mobile.png"
                alt=""
                className={styles.ingredientPosition}
              />
            </div>
            <div className={styles.orderWrap}>
              <img
                src="https://code.s3.yandex.net/react/code/bun-02-mobile.png"
                alt=""
                className={styles.ingredientPosition}
              />
            </div>
            <div className={styles.orderWrap}>
              <img
                src="https://code.s3.yandex.net/react/code/bun-02-mobile.png"
                alt=""
                className={styles.ingredientPosition}
              />
            </div>
          </div>

          <div className={`${styles.totalPrice} mt-6`}>
            <p className="text text_type_digits-default mr-2">5400</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>

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
