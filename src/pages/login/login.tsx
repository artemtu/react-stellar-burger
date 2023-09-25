import React from "react";
import Header from "../../components/app-header/app-header";
import { PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login.module.css";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postUserLogin } from "../../store/actions/login-user";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");

  const onClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const login = {
      email: email,
      password: password,
    };
    dispatch(postUserLogin(login))
      //@ts-ignore
      .then((login) => {
        navigate("/profile");
      });
  };

  return (
    <>
      <form className={styles.login} onSubmit={onClick}>
        <h3 className={`${styles.textEnter} text text_type_main-medium`}>
          Вход
        </h3>

        <EmailInput
          extraClass="mt-6"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <PasswordInput
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          name={"password"}
          extraClass="mt-6"
        />
        <Button type="primary" size="large" extraClass="mt-6" htmlType="submit" id="loginButton">
          Войти
        </Button>
        <p className="text text_type_main-small text_color_inactive mt-20">
          {" "}
          Вы - новый пользователь?{" "}
          <Link to="/register">Зарегистрироваться </Link>{" "}
        </p>
        <p className="text text_type_main-small text_color_inactive mt-4">
          Забыли пароль?{" "}
          <Link className="text text_type_main-small" to="/forgot-password">
            Восстановить пароль
          </Link>
        </p>
      </form>
    </>
  );
}

export default Login;
