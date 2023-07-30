import { Row, Col, Image, Typography } from "antd";
import React from "react";
import '../../css/speakers.css';

type myProps = {
  image: string;
  name: string;
  designation: string;
  company: string;
};
const SpeakerCard: React.FC<myProps> = ({
  image,
  name,
  designation,
  company,
}) => {
  return (
      <Col className="speakerCol" span={6}>
        <Image alt="img" src={image} width={200} preview={false} />
        <Typography.Text className="speakerName">{name}</Typography.Text>
        <Typography.Text className="speakerDesignation">{designation}</Typography.Text>
        <Typography.Text className="speakerCompany">{company}</Typography.Text>
      </Col>
  );
};

export default SpeakerCard;
