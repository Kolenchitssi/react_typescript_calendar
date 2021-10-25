import { Button, Layout, Modal, Row } from "antd";
import React, { FC, useEffect, useState } from "react";
import EventCalendar from "../component/EventCalendar";
import EventForm from "../component/EventForm";
import { useAction } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypeSelector";
import { IEvent } from "../models/IEvent";

const Event: FC = () => {
  const [modalVisible, setmodalVisible] = useState(false);
  const { fetchGuests, createEvent, fetchEvents } = useAction();
  const { guests, events } = useTypedSelector(state => state.event);
  const { user } = useTypedSelector(state => state.auth);
  useEffect(() => {
    fetchGuests();
    fetchEvents(user.username);
  }, []);

  const addNewEvent = (event: IEvent) => {
    setmodalVisible(false);
    createEvent(event);
  }
  return (
    <Layout>

      <EventCalendar events={events} />
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
          guests={guests}
          submit={addNewEvent}
        />
      </Modal>
    </Layout>
  );
};

export default Event;
