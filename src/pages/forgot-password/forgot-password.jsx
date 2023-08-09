import React from "react";
import Header from "../../components/app-header/app-header";
import styles from "./forgot-password.module.css";
import { PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [value, setValue] = React.useState();
  return (
    <>
      <Header />
      <div className={styles.forgot}>
        <h3 className={`${styles.textEnter} text text_type_main-medium`}>
          Восстановление пароля
        </h3>

        <EmailInput extraClass="mt-6" value={value} placeholder="Укажите e-mail " />
        <Button
          htmlType="button"
          type="primary"
          size="large"
          extraClass={`${styles.button} mt-6`}
        >
          Восстановить
        </Button>
        <p className="text text_type_main-small text_color_inactive mt-20">
          {" "}
          Вспомнили пароль? <Link to="#">Войти </Link>{" "}
        </p>
 
      </div>
    </>
  );
}

export default ForgotPassword;
