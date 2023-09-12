import { FC } from "react";
import { observer } from "mobx-react-lite";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Crew } from "../../components/crew";
import orderService from "../../core/orderService";

const { crews } = orderService;

export const CrewList: FC = observer(() => {
  return (
    <ListGroup>
      {crews.list.map((crew) => (
        <ListGroup.Item key={crew.crew_id} className="bg-success text-dark">
          <Row>
            <Col sm={9}>
              <Crew
                color={crew.car_color}
                name={`${crew.car_mark} ${crew.car_model}`}
              />
            </Col>
            <Col sm={3}>{crew.distance} м</Col>
          </Row>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});
