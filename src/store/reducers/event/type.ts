import { IEvent } from "../../../models/IEvent";
import { IUser } from "../../../models/IUser";

export interface IEventState {
  guests: IUser[];
  events: IEvent[];

}

export enum EventActionEnum {
  SET_GUESTS = "SET_GUESTS",
  SET_EVENTS = "SET_EVENTS",
}

export interface ISetGuestAction {
  type: EventActionEnum.SET_GUESTS
  payload: IUser[];
}
export interface ISetEventAction {
  type: EventActionEnum.SET_EVENTS
  payload: IEvent[];
}

export type iEventAction = ISetGuestAction | ISetEventAction
