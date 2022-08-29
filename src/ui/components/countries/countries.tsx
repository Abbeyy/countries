import { useAppSelector } from "../../../hooks";
import { searchCountries } from "../../../redux/selectors/country";
import { CountriesSearch } from "./countriesSearch";

export const Countries = () => {
  const countries = useAppSelector(searchCountries);

  return (
    <div>
      <CountriesSearch />
      {countries?.length ? (
        <p>{countries.map((country) => country.name).join(",")}</p>
      ) : null}
    </div>
  );
};
