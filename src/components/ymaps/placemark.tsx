import { FC } from "react";
import { Placemark as PlacemarkLib } from "@pbe/react-yandex-maps";

import { PlacemarkProps } from "./types";

export const Placemark: FC<PlacemarkProps> = ({ color, coords }) => {
  return (
    <PlacemarkLib
      geometry={coords}
      options={{
        preset: "slands#circleDotIcon",
        iconColor: color,
      }}
    />
  );
};
