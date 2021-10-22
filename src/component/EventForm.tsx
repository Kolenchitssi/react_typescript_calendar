import { Button, DatePicker, Form, Input, Row, Select } from "antd";
import React, { FC, useState } from "react";
import { IEvent } from "../models/IEvent";
import { IUser } from "../models/IUser";
import { rules } from "../utils/rules";

interface IEventFormProps {
  guests: IUser[];
}

const EventForm: FC<IEventFormProps> = (props) => {

  const [event, setEvent] = useState<IEvent>({
    author: '',
    date: '',
    description: '',
    guest: '',
  } as IEvent)

  return (
    <Form
      name="basic"
      // onFinish={submit}
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
          value={"1"}
          onChange={(e) => {
            // setUsername(e.target.value);
          }}
        />
      </Form.Item>
      <Form.Item label="Дата события" name="date" rules={[rules.reuired()]}>
        <DatePicker onChange={() => console.log("onChange")} />
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
