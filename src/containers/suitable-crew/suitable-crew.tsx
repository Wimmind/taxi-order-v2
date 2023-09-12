import { FC } from "react";
import { observer } from "mobx-react-lite";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Crew } from "../../components/crew";
import orderService from "../../core/orderService";

const { crews } = orderService;

export const SuitableCrew: FC = observer(() => {
  if (!crews.list.length) {
    return null;
  }

  return (
    <ListGroup.Item className="bg-success text-dark rounded">
      <Crew
        color={crews.list[0].car_color}
        name={`${crews.list[0].car_mark} ${crews.list[0].car_model}`}
      />
      <Row className="justify-content-center">
        <Col sm={3} className="border border-secondary rounded">
          {crews.list[0].car_number}
        </Col>
      </Row>
    </ListGroup.Item>
  );
});
