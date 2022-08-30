import { Marker, Popup, Tooltip } from "react-leaflet";
import { CountryPopup } from "../popup/country";
import markerIcon from "../../../../assets/icons/marker.svg";
import { Icon } from "leaflet";
import { CountryPreview } from "../../countries/preview/countryPreview";
import { Country } from "../../../../types/country";

type Props = {
  country: Country;
};

const MARKER_ICON = new Icon({
  iconUrl: markerIcon,
  iconSize: [40, 28],
  iconAnchor: [20, 0],
});

export const CountryMarker = (props: Props) => {
  const { country } = props;
  const { latlng } = country;

  const countryName = country.name?.official || country.name?.common;

  if (!latlng) {
    return null;
  }

  return (
    <Marker icon={MARKER_ICON} position={[latlng[0], latlng[1]]}>
      <Popup>
        <CountryPreview smaller country={country} />
      </Popup>
      {countryName ? <Tooltip direction="bottom">{countryName}</Tooltip> : null}
    </Marker>
  );
};
