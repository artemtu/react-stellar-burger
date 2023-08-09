import React from "react";
import Header from "../../components/app-header/app-header";
import { PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login.module.css";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";

function Login() {
  const [value, setValue] = React.useState();

  return (
    <>
      <Header />
      <div className={styles.login}>
        <h3 className={`${styles.textEnter} text text_type_main-medium`}>
          Вход
        </h3>
        <EmailInput
          extraClass="mt-6"
          value={value}
          // onChange={onChange}
        />
        <PasswordInput
          // onChange={onChange}
          value={value}
          name={"password"}
          extraClass="mt-6"
        />
        <Button
          htmlType="button"
          type="primary"
          size="large"
          extraClass={`${styles.button} mt-6`}
        >
          Войти
        </Button>
        <p className="text text_type_main-small text_color_inactive mt-20">
          {" "}
          Вы - новый пользователь? <Link to="/">Зарегистрироваться </Link>{" "}
        </p>
        <p className="text text_type_main-small text_color_inactive mt-4">
          Забыли пароль?{" "}
          <Link className="text text_type_main-small" to ='/'>
            Восстановить пароль
          </Link>
        </p>
      </div>
    </>
  );
}

export default Login;
