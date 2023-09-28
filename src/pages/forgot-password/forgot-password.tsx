import React from "react";
import styles from "./forgot-password.module.css";
import { EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { postResetPassword } from "../../store/actions/forgot-password";
import { useAppDispatch } from "../../store/types";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function ForgotPassword() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [email, setEmail] = React.useState("");

  const onClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const resetPassword = {
      email: email as string,
    };

    dispatch(postResetPassword(resetPassword.email)).then(() => {
      navigate("/reset-password", { replace: true });
    });
  };

  return (
    <>
      <form className={styles.forgot} onSubmit={onClick}>
        <h3 className={`${styles.textEnter} text text_type_main-medium`}>
          Восстановление пароля
        </h3>

        <EmailInput
          extraClass="mt-6"
          value={email}
          placeholder="Укажите e-mail "
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          htmlType="submit"
          type="primary"
          size="large"
          extraClass={`${styles.button} mt-6`}
        >
          Восстановить
        </Button>
        <p className="text text_type_main-small text_color_inactive mt-20">
          {" "}
          Вспомнили пароль? <Link to="/login">Войти </Link>{" "}
        </p>
      </form>
    </>
  );
}

export default ForgotPassword;
