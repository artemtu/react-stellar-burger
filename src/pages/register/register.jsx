import React from "react";
import Header from "../../components/app-header/app-header";
import styles from "./register.module.css";
import { PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";

function Register() {
  const [value, setValue] = React.useState();
  return (
    <>
      <Header />
      <div className={styles.register}>
        <h3 className={`${styles.textEnter} text text_type_main-medium`}>
          Регистрация
        </h3>
        <Input
          type={"text"}
          placeholder={"Имя"}
          value={value}
          name={"name"}
          error={false}
          errorText={"Ошибка"}
          size={"default"}
          extraClass="mt-6"
        />

        <EmailInput extraClass="mt-6" value={value} />
        <PasswordInput value={value} name={"password"} extraClass="mt-6" />
        <Button
          htmlType="button"
          type="primary"
          size="large"
          extraClass={`${styles.button} mt-6`}
        >
          Зарегистрироваться
        </Button>
        <p className="text text_type_main-small text_color_inactive mt-20">
          {" "}
          Уже зарегистрированы? <Link to="/login">Войти </Link>{" "}
        </p>
 
      </div>
    </>
  );
}

export default Register;
