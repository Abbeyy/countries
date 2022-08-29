import { Countries } from "../countries/countries";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles["Home"]}>
      <h1 className={styles["Title"]}>REST Countries</h1>
      <Countries />
    </div>
  );
};

export default Home;
