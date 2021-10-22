import { Button, Layout, Modal, Row } from "antd";
import React, { FC, useEffect, useState } from "react";
import EventCalendar from "../component/EventCalendar";
import EventForm from "../component/EventForm";
import { useAction } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypeSelector";

const Event: FC = () => {
  const [modalVisible, setmodalVisible] = useState(false);
  const { fetchGuests } = useAction();
  const { guests } = useTypedSelector(state => state.event);

  useEffect(() => { fetchGuests() }, []);
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
        <EventForm
          guests={guests} />
      </Modal>
    </Layout>
  );
};

export default Event;
