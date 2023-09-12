import { Crew } from "../models/Crew";

export const CREWS_MOCK: Crew[] = [
  {
    crew_id: 123,
    car_mark: "Chevrolet",
    car_model: "Lacetti",
    car_color: "синий",
    car_number: "Е234КУ",
    driver_name: "Деточкин",
    driver_phone: "7788",
    coords: [1, 1],
    distance: 300,
  },
  {
    crew_id: 125,
    car_mark: "Hyundai",
    car_model: "Solaris",
    car_color: "белый",
    car_number: "Ф567АС",
    driver_name: "Петров",
    driver_phone: "8899",
    coords: [1, 1],
    distance: 600,
  },
  {
    crew_id: 126,
    car_mark: "Hyundai",
    car_model: "Polaris",
    car_color: "красный",
    car_number: "П333ГГ",
    driver_name: "Сидоров",
    driver_phone: "4499",
    coords: [1, 1],
    distance: 800,
  },
];
