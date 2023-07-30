import React from "react";
import { Typography, Col, Row } from "antd";
import "../../css/agenda.css";
import { AgendaList } from "../../constants/AgendaList";

const Agenda = () => {
  const { Title } = Typography;

  return (
    <Row>
      <Col className="agendaCol">
        <Title className="agendaHead">Agenda</Title>
        <ul>
          {AgendaList.map((item: string, index: number) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </Col>
    </Row>
  );
};

export default Agenda;
