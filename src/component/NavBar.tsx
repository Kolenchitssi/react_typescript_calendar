import { Layout, Menu, Row } from "antd";
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useAction } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypeSelector";
import { RouteNames } from "../router";
import { AuthActionCreator } from "../store/reducers/auth/action-creator";

const NavBar: FC = () => {
  const router = useHistory();
  const { isAuth, user } = useTypedSelector((state) => state.auth);
  // const dispatch = useDispatch();
  const { logout } = useAction();

  return (
    <Layout.Header>
      <Row justify="end">
        {isAuth ? (
          <>
            {" "}
            <div style={{ color: "white" }}> User name: {user.username} </div>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item
                onClick={
                  logout
                  // () => dispatch(AuthActionCreator.logout())
                }
                key="1"
              >
                Выйти
              </Menu.Item>
            </Menu>
          </>
        ) : (
          <>
            <div style={{ color: "white" }}> Войти:</div>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item onClick={() => router.push(RouteNames.LOGIN)} key="2">
                Логин
              </Menu.Item>
            </Menu>
          </>
        )}
      </Row>
    </Layout.Header>
  );
};

export default NavBar;
