import React from "react";
import { Map } from "@pbe/react-yandex-maps";
import { DefaultProps } from "../../types";

export type LibMapProps = React.ComponentProps<typeof Map>;

export interface MapProps extends DefaultProps, LibMapProps {
  onClick?: (coords: number[]) => void;
}

export interface PlacemarkProps {
  color: string;
  coords: number[];
}
