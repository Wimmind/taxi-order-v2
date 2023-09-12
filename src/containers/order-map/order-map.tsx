import { FC, useCallback, useMemo } from "react";
import { observer } from "mobx-react-lite";
import { useYMaps } from "@pbe/react-yandex-maps";

import orderService from "../../core/orderService";
import { Map, Placemark } from "../../components/ymaps";

const { location, crews } = orderService;

export const OrderMap: FC = observer(() => {
  const ymaps = useYMaps(["geolocation", "geocode"]);

  const handleClick = useCallback(
    async (coords: number[]) => {
      if (ymaps) {
        location.setCoords(coords);
        const result = await ymaps.geocode(coords);
        const firstGeoObject = result.geoObjects.get(0);

        if (
          //@ts-ignore
          !firstGeoObject.getThoroughfare() ||
          //@ts-ignore
          !firstGeoObject.getPremiseNumber()
        ) {
          location.setAddress("");
          location.setError("Адрес не найден");
          crews.setList([]);
        } else {
          const newAddress = [
            //@ts-ignore
            firstGeoObject.getThoroughfare(),
            //@ts-ignore
            firstGeoObject.getPremiseNumber(),
          ].join(", ");
          location.setAddress(newAddress);
          orderService.getCrews();
        }
      }
    },
    [ymaps]
  );

  const state = useMemo(() => {
    if (location.coords) {
      return {
        center: location.coords,
        zoom: 13,
      };
    }

    return;
  }, [location.coords]);

  return (
    <Map state={state} onClick={handleClick} width="100%" height="500px">
      {location.coords && (
        <Placemark
          coords={location.coords}
          color={location.error ? "#ff3333" : "#e5be01"}
        />
      )}
      {crews.list.map((crew) => (
        <Placemark key={crew.crew_id} coords={crew.coords} color="#00a550" />
      ))}
    </Map>
  );
});
