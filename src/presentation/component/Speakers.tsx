import React from "react";
import { Typography, Col, Row } from "antd";
import "../../css/speakers.css";
import SpeakerCard from "./SpeakerCard";
import { SpeakerList } from "../../constants/SpeakersList";

const Speakers = () => {
  const { Title } = Typography;
  return (
    <Row className="speakerRow">
      <Col span={24}>
        <Title className="speakerHead">Speakers</Title>
        <Row style={{display:'flex' , padding:'30px 70px'}} >
        {SpeakerList.map((item: any, index: number) => {
          return (
              <SpeakerCard
                key={index}
                image={item.image}
                name={item.name}
                designation={item.designation}
                company={item.company}
            />
            );
        })}
        </Row>
      </Col>
    </Row>
  );
};

export default Speakers;
