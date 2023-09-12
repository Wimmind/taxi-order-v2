import { makeAutoObservable } from "mobx";
import { Crew } from "../../models/Crew";

interface ICrews {
  list: Crew[];
}

export class Crews {
  list: ICrews["list"];

  constructor() {
    this.list = [];

    makeAutoObservable(this);
  }

  setList = (value: ICrews["list"]) => {
    this.list = value.sort((a, b) => b.distance - a.distance).reverse();
  };
}
