import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { allActionCreator } from "../store/reducers/action-creator";

export const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allActionCreator, dispatch);
};
