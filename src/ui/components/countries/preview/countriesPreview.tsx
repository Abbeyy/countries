import { Country } from "../../../../types/country";
import { CountryPreview } from "./countryPreview";
import styles from "./countriesPreview.module.css";

type Props = {
  countries: Country[];
};

export const CountriesPreview = (props: Props) => {
  const { countries } = props;

  return (
    <div className={styles["Previews"]}>
      {countries.map((country) => (
        <CountryPreview country={country} />
      ))}
    </div>
  );
};
