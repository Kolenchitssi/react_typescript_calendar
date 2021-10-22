import axios from "axios";
import { AppDispatch } from "../..";
import UserService from "../../../api/UserService";
import { IEvent } from "../../../models/IEvent";
import { IUser } from "../../../models/IUser";
import { EventActionEnum, ISetEventAction, ISetGuestAction } from "./type";

export const EvenActionCreator = {
  setGuests: (payload: IUser[]): ISetGuestAction => ({ type: EventActionEnum.SET_GUESTS, payload }),
  setEvents: (payload: IEvent[]): ISetEventAction => ({ type: EventActionEnum.SET_EVENTS, payload }),
  fetchGuests: () => async (dispatch: AppDispatch) => {
    try {
      // const responce = await axios.get('./users.json')
      const responce = await UserService.getUsers();
      dispatch(EvenActionCreator.setGuests(responce.data))
    } catch (error) {
      console.log(error);

    }
  }
}
