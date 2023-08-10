import React from "react";
import Header from "../../components/app-header/app-header";
import styles from "./register.module.css";
import { PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { postUser } from "../../store/actions/register-user";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";

function Register() {
  const dispatch = useDispatch();
  const [name, setName] = React.useState();
  const [password, setPassword] = React.useState();
  const [email, setEmail] = React.useState();

  const onClick = () => {
    const registation = ({
      'email': email,
      'password':password,
      'name':name
    });
    dispatch(postUser(registation))

  }

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
          value={name}
          name={"name"}
          error={false}
          errorText={"Ошибка"}
          size={"default"}
          extraClass="mt-6"
          onChange={(e) => setName(e.target.value)}
        />

        <EmailInput extraClass="mt-6" value={email}  onChange={(e) => setEmail(e.target.value)} />
        <PasswordInput value={password} name={"password"} onChange={(e) => setPassword(e.target.value)} extraClass="mt-6" />
        <Button
          htmlType="button"
          type="primary"
          size="large"
          extraClass={`${styles.button} mt-6`}
          onClick={onClick}
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
