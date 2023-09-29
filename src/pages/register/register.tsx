import React from "react";
import styles from "./register.module.css";
import { PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { postUser } from "../../store/actions/register-user";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/types";

function Register() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");

  const onClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const registation = {
      email: email,
      password: password,
      name: name,
    };
    dispatch(postUser(registation)).then((registation) => {
      navigate("/login");
    });
  };

  return (
    <form className={styles.register} onSubmit={onClick}>
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

      <EmailInput
        extraClass="mt-6"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <PasswordInput
        value={password}
        name={"password"}
        onChange={(e) => setPassword(e.target.value)}
        extraClass="mt-6"
      />
      <Button
        htmlType="submit"
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
    </form>
  );
}

export default Register;
