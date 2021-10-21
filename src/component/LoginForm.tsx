import { Button, Form, Input } from "antd";
import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { useAction } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypeSelector";
import { AuthActionCreator } from "../store/reducers/auth/action-creator";
import { rules } from "../utils/rules";

const LoginForm: FC = () => {
  const dispatch = useDispatch();
  const { error, isLoading } = useTypedSelector((state) => state.auth);
  const [username, setUsername] = useState("");
  const [pasword, setPasword] = useState("");
  const { login } = useAction(); //вместо dispatch  мы вызываем как обычную функцию
  const submit = () => {
    // dispatch(AuthActionCreator.login(username, pasword));
    login(username, pasword);
  };
  return (
    <Form
      name="basic"
      onFinish={submit}
      onFinishFailed={() => {
        console.log("erorr");
      }}
    >
      {error && <div style={{ color: "red" }}> {error} </div>}
      <Form.Item
        label="Имя пользователя"
        name="username"
        rules={[rules.reuired("Пожалуйста введите имя!")]}
      >
        <Input
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </Form.Item>

      <Form.Item
        label="Пароль"
        name="password"
        rules={[rules.reuired("Пожалуйста введите пароль!")]}
      >
        <Input.Password
          value={pasword}
          onChange={(e) => {
            setPasword(e.target.value);
          }}
        />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
