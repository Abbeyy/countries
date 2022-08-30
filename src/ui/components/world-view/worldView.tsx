import { Map } from "./map";
import styles from "./worldView.module.css";

export const WorldView = () => {
  return (
    <div className={styles["WorldView"]}>
      <h1 className={styles["Title"]}>World View</h1>
      <Map />
    </div>
  );
};
