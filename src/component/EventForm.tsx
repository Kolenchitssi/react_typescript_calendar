import { Button, DatePicker, Form, Input, Row, Select } from "antd";
import React, { FC } from "react";
import { rules } from "../utils/rules";

const EventForm: FC = () => {
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

      <Form.Item label="Дата события" name="date" rules={[rules.reuired()]}>
        <Select
          defaultValue="lucy"
          style={{ width: 120 }}
          onChange={() => console.log("onChange")}
        >
          <Select.Option value="jack">Jack</Select.Option>
          <Select.Option value="lucy">Lucy</Select.Option>
          <Select.Option value="disabled" disabled>
            Disabled
          </Select.Option>
          <Select.Option value="Yiminghe">yiminghe</Select.Option>
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
