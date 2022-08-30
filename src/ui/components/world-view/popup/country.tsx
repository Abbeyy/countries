type Props = {
  name: string | null | undefined;
  population: number | null;
  timezones: string[] | null;
  lat: number;
  lng: number;
};

export const CountryPopup = (props: Props) => {
  const { name, population, timezones, lat, lng } = props;

  return (
    <div>
      <p>{name}</p>
      {population ? <p>{`Population: ${population}`}</p> : null}
      {timezones?.length ? (
        <p>{`Timezones: ${timezones?.join(", ")}`}</p>
      ) : null}
      <p>{`Lat/Lng: ${lat} / ${lng}`}</p>
    </div>
  );
};
