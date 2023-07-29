import React from "react";
import styles from "./orderdetails.module.css";
import orderImg from "../../../images/doneorder-done.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getOrderNumber } from "../../../store/actions/orderNumber";
import { useEffect } from "react";

const modalRoot = document.getElementById("react-modal");

export function OrderDetails() {
  const ingredientsInStore = useSelector((state) => state.ingredients);



  const orderNumber = useSelector((state) => state.orderDetails.orderDetails.order.number);



  return (
    <div className={styles.figures}>
      <span className="text text_type_digits-large mt-30">{orderNumber}</span>
      <p className="text text_type_main-default mt-8">идентификатор заказа</p>
      <img src={orderImg} alt="заказ готов" className="mt-15" />
      <p className="mt-15 text text_type_main-small">
        Ваш заказ начали готовить
      </p>
      <p className="mt-2 text text_type_main-default text_color_inactive pb-30">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
}

export default OrderDetails;
