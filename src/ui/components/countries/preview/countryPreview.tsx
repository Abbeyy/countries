import { Country } from "../../../../types/country";
import styles from "./countryPreview.module.css";

type Props = {
  country: Country;
};

const WIDTH = 150;

export const CountryPreview = (props: Props) => {
  const { country } = props;

  const { flags, name } = country;

  const flagStyle = { width: WIDTH, height: "auto" };

  return (
    <div>
      <div className={styles["Preview"]}>
        {flags.png ? (
          <img style={flagStyle} src={flags.png} alt="country flag" />
        ) : null}
      </div>
      <div className={styles["Details"]}>
        <h3 className={styles["Name"]}>{name?.official}</h3>
        <p className={styles["Info"]}>{`Population: ${country.population}`}</p>
        <p className={styles["Info"]}>{`Timezones: ${country.timezones?.join(
          ", "
        )}`}</p>
        <p className={styles["Info"]}>{`Lat/Lng: ${country.latlng?.join(
          " / "
        )}`}</p>
      </div>
    </div>
  );
};
