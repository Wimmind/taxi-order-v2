import { FC, useCallback } from "react";
import { Map as MapLib, ZoomControl } from "@pbe/react-yandex-maps";
import ymaps from "yandex-maps";
import { MapProps } from "./types";

export const DEFAULT_STATE = {
  center: [56.851596, 53.21222],
  zoom: 13,
};

export const Map: FC<MapProps> = (props) => {
  const { onClick, onBoundsChange, children, options, ...rest } = props;

  const handleMapClick = useCallback(
    (e: ymaps.MapEvent) => {
      const coords = e.get("coords");
      onClick?.(coords);
    },
    [onClick]
  );

  return (
    <MapLib
      height="100%"
      width="100%"
      modules={["templateLayoutFactory", "layout.ImageWithContent"]}
      onClick={handleMapClick}
      defaultState={DEFAULT_STATE}
      options={{
        suppressMapOpenBlock: true,
        yandexMapDisablePoiInteractivity: true,
        ...options,
      }}
      {...rest}
    >
      <ZoomControl
        options={{
          position: {
            top: 3,
            right: 3,
          },
        }}
      />
      {children}
    </MapLib>
  );
};
