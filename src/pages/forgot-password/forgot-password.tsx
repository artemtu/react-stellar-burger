import React from "react";
import Header from "../../components/app-header/app-header";
import styles from "./forgot-password.module.css";
import { PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { postResetPassword } from "../../store/actions/forgot-password";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function ForgotPassword() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState('');

  const onClick = () => {
    const resetPassword = {
      email: email,
    };
    //@ts-ignore
    dispatch(postResetPassword(resetPassword)).then(() => {
      navigate("/reset-password", { replace: true });
    });
  };

  return (
    <>
      <Header />
      <div className={styles.forgot}>
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
          htmlType="button"
          type="primary"
          size="large"
          extraClass={`${styles.button} mt-6`}
          onClick={onClick}
        >
          Восстановить
        </Button>
        <p className="text text_type_main-small text_color_inactive mt-20">
          {" "}
          Вспомнили пароль? <Link to="/login">Войти </Link>{" "}
        </p>
      </div>
    </>
  );
}

export default ForgotPassword;
