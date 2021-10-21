import { Layout } from "antd";

import React, { FC, useEffect } from "react";
import AppRouter from "./component/AppRouter";
import NavBar from "./component/NavBar";
import "./App.css";
import { useAction } from "./hooks/useAction";
import { IUser } from "./models/IUser";

const App: FC = () => {
  const { setUser, setISAuth } = useAction();
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setUser({ username: localStorage.getItem("username" || "") } as IUser);
      setISAuth(true);
    }
  }, []);
  return (
    <Layout>
      <NavBar />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout>
  );
};

export default App;
