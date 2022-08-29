import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import styles from "./AppRoot.module.css";
import Menu from "./ui/navigation/menu";
import Home from "./ui/components/home/home";
import { Countries } from "./ui/components/countries/countries";

const AppRoot = () => {
  return (
    <Router>
      <div className={styles["AppRoot"]}>
        <Menu />

        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="countries" element={<Countries />} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRoot;
