import { Button, Layout, Modal, Row } from "antd";
import React, { FC, useState } from "react";
import EventCalendar from "../component/EventCalendar";
import EventForm from "../component/EventForm";

const Event: FC = () => {
  const [modalVisible, setmodalVisible] = useState(false);
  return (
    <Layout>
      <EventCalendar events={[]} />
      <Row justify="center">
        <Button onClick={() => setmodalVisible(true)}>Добавить событие</Button>
      </Row>
      <Modal
        title="Добавить событие"
        visible={modalVisible}
        footer={null}
        onCancel={() => setmodalVisible(false)}
      >
        <EventForm />
      </Modal>
    </Layout>
  );
};

export default Event;
