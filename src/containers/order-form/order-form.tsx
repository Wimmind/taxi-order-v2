import { FC } from "react";
import { observer } from "mobx-react-lite";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useYMaps } from "@pbe/react-yandex-maps";

import orderService from "../../core/orderService";

const { location, crews } = orderService;

export const OrderForm: FC = observer(() => {
  const ymaps = useYMaps(["geolocation", "geocode"]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = event.target.value;
    location.setAddress(currentValue);
  };

  const handleBlur = async () => {
    if (!location.address.length) {
      location.setCoords(null);
      crews.setList([]);
      location.setError("Поле не заполнено");
      return;
    }

    if (ymaps) {
      const result = await ymaps.geocode(`Ижевск, ${location.address}`);
      const object = result.geoObjects.get(0);

      if (!object.geometry) {
        location.setError("Адрес не найден");
        return;
      }

      //@ts-ignore
      const coords = object.geometry.getCoordinates();

      location.setCoords(coords);
      orderService.getCrews();
    }
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    orderService.createOrder();
  };

  return (
    <Form className="mb-10">
      <Form.Row>
        <Form.Label column sm={2}>
          Откуда
        </Form.Label>
        <Col sm={9}>
          <Form.Control
            placeholder="Улица, номер дома"
            onBlur={handleBlur}
            onChange={handleChange}
            value={location.address}
            className={"has-error"}
            isInvalid={!!location.error}
          />
          {!!location.error && (
            <Form.Control.Feedback type="invalid">
              {location.error}
            </Form.Control.Feedback>
          )}
        </Col>
        <Col sm={1}>
          <Button
            onClick={handleSubmit}
            type="submit"
            disabled={!!location.error}
          >
            Заказать
          </Button>
        </Col>
      </Form.Row>
    </Form>
  );
});
