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
  },
  createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem('events') || '[]';
      const json = JSON.parse(events) as IEvent[];
      json.push(event);
      dispatch(EvenActionCreator.setEvents(json));
      localStorage.setItem('events', JSON.stringify(json))

    } catch (e) {
      console.log(e);
    }
  },
  fetchEvents: (username: string) => async (
    dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem('events') || '[]';
      const json = JSON.parse(events) as IEvent[];
      const currentUserEvent = json.filter(ev => ev.author === username || ev.guest === username);
      dispatch(EvenActionCreator.setEvents(currentUserEvent));
    } catch (error) {
      console.log(error);
    }
  }
}
