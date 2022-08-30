import { Country } from "../../../../types/country";
import styles from "./countryPreview.module.css";

type Props = {
  country: Partial<Country>;
  smaller?: boolean;
};

const WIDTH = 150;

export const CountryPreview = (props: Props) => {
  const { country, smaller } = props;

  const { flags, name } = country;

  const flagStyle = { width: WIDTH, height: "auto" };

  return (
    <div>
      {!smaller ? (
        <div className={styles["Preview"]}>
          {flags?.png ? (
            <img style={flagStyle} src={flags.png} alt="country flag" />
          ) : null}
        </div>
      ) : null}
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
