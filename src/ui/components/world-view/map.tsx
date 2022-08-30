import { useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import {
  allCountries,
  allCountriesLoading,
} from "../../../redux/selectors/country";
import { getAllCountries } from "../../../thunk/countries/getAllCountries";
import { Country } from "../../../types/country";
import { CountryMarker } from "./marker/countryMarker";

const fields = ["name", "timezones", "population", "latlng"];

export const Map = () => {
  const dispatch = useAppDispatch();
  const countries = useAppSelector(allCountries);
  const isLoading = useAppSelector(allCountriesLoading);

  useEffect(() => {
    dispatch(getAllCountries(fields));
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const content = () =>
    countries?.reduce((acc: JSX.Element[], country: Country) => {
      if (country.latlng) {
        acc.push(<CountryMarker country={country} />);
      }

      return acc;
    }, []);

  return (
    <MapContainer
      style={{ height: "70vh", width: "70vw", borderRadius: "10px" }}
      center={[51.505, -0.09]}
      zoom={5}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {countries?.length ? content() : null}
    </MapContainer>
  );
};
