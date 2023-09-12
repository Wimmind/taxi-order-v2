import { makeAutoObservable } from "mobx";

interface ILocation {
  address: string;
  coords: number[] | null;
  error: string | null;
}

export class Location {
  address: ILocation["address"];
  coords: ILocation["coords"];
  error: ILocation["error"];

  constructor() {
    this.address = "";
    this.coords = null;
    this.error = null;

    makeAutoObservable(this);
  }

  setAddress = (value: ILocation["address"]) => {
    this.address = value;
    this.setError(null);
  };

  setCoords = (value: ILocation["coords"]) => {
    this.coords = value;
  };

  setError = (value: ILocation["error"]) => {
    this.error = value;
  };
}
