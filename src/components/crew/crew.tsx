import { FC } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import carIcon from "../../image/taxi-solid.svg";

import { CrewProps } from "./types";

export const Crew: FC<CrewProps> = ({ name, color }) => {
  return (
    <Row>
      <Col sm={2}>
        <img alt="" src={carIcon} />
      </Col>
      <Col sm={8}>
        <Row>{name}</Row>
        <Row>{color}</Row>
      </Col>
    </Row>
  );
};
