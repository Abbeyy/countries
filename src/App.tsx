import { Provider } from "react-redux";
import AppRoot from "./AppRoot";
import { store } from "./redux/store";
import "leaflet/dist/leaflet.css";

const App = () => (
  <Provider store={store}>
    <AppRoot />
  </Provider>
);

export default App;
