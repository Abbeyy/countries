import styles from "./home.module.css";

const REST_COUNTRIES_URL = "https://restcountries.com/#rest-countries";
const REST_COUNTRIES_REPO = "https://gitlab.com/amatos/rest-countries";
const LINKED_IN = "https://www.linkedin.com/in/abbey-ross-5198b7128/";

const Home = () => {
  return (
    <div className={styles["Home"]}>
      <h1 className={styles["Title"]}>REST Countries</h1>
      <p className={styles["Text"]}>
        Data is gathered from <a href={REST_COUNTRIES_URL}>RESTCountries</a> by
        <a href={REST_COUNTRIES_REPO}> Alejandro Matos</a>
      </p>
      <p className={styles["Text"]}>
        The purpose of this site is to enable easy searching and quick
        exploration of countries around the globe.
      </p>
      <h3 className={styles["Text"]}>Time to get your geography hat on.</h3>
      <p className={styles["Text"]}>
        Look to the{" "}
        <span className={styles["Highlight"]}>menu on the left</span> to get
        started!
      </p>
      <h3 className={styles["Text"]}>Have a problem?</h3>
      <p className={styles["Text"]}>
        You can contact me on <a href={LINKED_IN}>Linked In</a>.
      </p>
    </div>
  );
};

export default Home;
