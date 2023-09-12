import { Location, Crews } from "./models";
import { getCrews, createOrder } from "../api";

export class OrderService {
  private _location: Location;
  private _crews: Crews;

  constructor() {
    this._location = new Location();
    this._crews = new Crews();
  }

  get location() {
    return this._location;
  }

  get crews() {
    return this._crews;
  }

  createOrder = async () => {
    if (!this.location.address.length) {
      this.location.setError("Поле не заполнено");
      return;
    }

    if (!this._location.coords) {
      return;
    }

    await this.getCrews();

    const result = await createOrder({
      address: this._location.address,
      coords: this._location.coords,
      source_time: Date.now(),
      crew_id: this._crews.list[0].crew_id,
    });

    console.log(result);
  };

  getCrews = async () => {
    if (!this._location.coords) {
      return;
    }

    const result = await getCrews({
      address: this._location.address,
      coords: this._location.coords,
      source_time: Date.now(),
    });

    this._crews.setList(result.data);
  };
}

const orderService = new OrderService();

export default orderService;
