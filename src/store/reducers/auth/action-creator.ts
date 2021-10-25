import axios from "axios";
import { AppDispatch } from "../..";
import UserService from "../../../api/UserService";
import { IUser } from "../../../models/IUser";
import {
  AuthActionEnum,
  ISetAuthAction,
  ISetErrorAction,
  ISetLoadingAction,
  ISetUserAction,
} from "./types";

export const AuthActionCreator = {
  setUser: (user: IUser): ISetUserAction => ({
    type: AuthActionEnum.SET_USER,
    payload: user,
  }),

  setISAuth: (auth: boolean): ISetAuthAction => ({
    type: AuthActionEnum.SET_AUTH,
    payload: auth,
  }),

  setError: (payload: string): ISetErrorAction => ({
    type: AuthActionEnum.SET_ERROR,
    payload: payload,
  }),

  setIsLoading: (payload: boolean): ISetLoadingAction => ({
    type: AuthActionEnum.SET_IS_LOADING,
    payload: payload,
  }),

  login:
    (username: string, password: string) => async (dispatch: AppDispatch) => {
      try {
        dispatch(AuthActionCreator.setIsLoading(true));
        setTimeout(async () => {
          // const responce = await axios.get<IUser[]>("./users.json");
          const responce = await UserService.getUsers();
          const mockUsers = responce.data.find(
            (user) => user.username === username && user.password === password
          );
          console.log(
            responce.data[0],
            "username",
            username,
            "password",
            password
          );

          if (mockUsers) {
            localStorage.setItem("auth", "true");
            localStorage.setItem("username", mockUsers.username);
            dispatch(AuthActionCreator.setUser(mockUsers));
            dispatch(AuthActionCreator.setISAuth(true));
            console.log("mockUsers", mockUsers);
          } else {
            console.log(" error");

            dispatch(
              AuthActionCreator.setError("Некорректный логин или пароль")
            );
            dispatch(AuthActionCreator.setIsLoading(false));
          }
        }, 1000);
      } catch (error) {
        dispatch(AuthActionCreator.setError("Произошла ошибка при логине"));
      }
    },
  logout: () => async (dispatch: AppDispatch) => {
    try {
      localStorage.removeItem("auth");
      localStorage.removeItem("username");
      dispatch(AuthActionCreator.setUser({} as IUser));
      dispatch(AuthActionCreator.setISAuth(false));
    } catch (error) { }
  },
};
