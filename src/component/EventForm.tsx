import { Button, DatePicker, Form, Input, Row, Select } from "antd";
import { Moment } from "moment";
import React, { FC, useState } from "react";
import { $CombinedState } from "redux";
import { useTypedSelector } from "../hooks/useTypeSelector";
import { IEvent } from "../models/IEvent";
import { IUser } from "../models/IUser";
import { formatDate } from "../utils/formatDate";
import { rules } from "../utils/rules";

interface IEventFormProps {
  guests: IUser[];
  submit: (event: IEvent) => void
}

const EventForm: FC<IEventFormProps> = (props) => {

  const [event, setEvent] = useState<IEvent>({
    author: '',
    date: '',
    description: '',
    guest: '',
  } as IEvent);

  const { user } = useTypedSelector(state => state.auth)

  const selectDate = (date: Moment | null) => {
    if (date) {
      setEvent({ ...event, date: formatDate(date.toDate()) })
    }
  }

  const submitForm = () => {
    props.submit({ ...event, author: user.username });
  }

  return (
    <Form
      name="basic"
      onFinish={submitForm}
      onFinishFailed={() => {
        console.log("error");
      }}
    >
      <Form.Item
        label="Описание события"
        name="description"
        rules={[rules.reuired()]}
      >
        <Input
          value={event.description}
          onChange={(e) => {
            setEvent({ ...event, description: e.target.value });
          }}
        />
      </Form.Item>
      <Form.Item label="Дата события" name="date" rules={[rules.reuired(), rules.isDateAfter("Нельзя создать событие в прошлом")]}>
        <DatePicker onChange={(e) => selectDate(e)} />
      </Form.Item>

      <Form.Item label="Выберите гостя" name="guest" rules={[rules.reuired()]}>
        <Select
          style={{ width: 120 }}
          onChange={(guest: string) => setEvent({ ...event, guest })}
        >
          {props.guests.map(guest => <Select.Option key={guest.username} value={guest.username}>{guest.username}</Select.Option>)}

        </Select>
      </Form.Item>

      <Row justify="center">
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Создать
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
};

export default EventForm;
