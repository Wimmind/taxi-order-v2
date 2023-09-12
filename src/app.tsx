import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { YMaps } from "@pbe/react-yandex-maps";
import { OrderForm } from "./containers/order-form";
import { OrderMap } from "./containers/order-map";
import { CrewList } from "./containers/crew-list";
import { SuitableCrew } from "./containers/suitable-crew";

const apikey = "b1f85c76-415e-4cb6-8170-21e2e3fd619b";

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <YMaps
        version="2.1"
        query={{
          apikey,
        }}
      >
        <Card>
          <Card.Header as="h4" className="bg-secondary text-white">
            Детали заказа
          </Card.Header>
          <Card.Body>
            <OrderForm />
            <Row className="mb-10">
              <Col sm={2}>Подходящий экипаж:</Col>
              <Col sm={4}>
                <SuitableCrew />
              </Col>
            </Row>
            <Row>
              <Col sm={8}>
                <OrderMap />
              </Col>
              <Col sm={4}>
                <CrewList />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </YMaps>
    </div>
  );
};

export default App;
