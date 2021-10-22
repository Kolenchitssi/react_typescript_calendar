import { AuthActionCreator } from "./auth/action-creator";
import { EvenActionCreator } from "./event/action-creator";

export const allActionCreator = {
  ...AuthActionCreator,
  ...EvenActionCreator
};
