import axios from "axios";
import { COUNTRY_NAME_PARTIAL } from "../constants/endpoints";

export const querySearch = async (searchValue: string) => {
  const { data } = await axios.get(`${COUNTRY_NAME_PARTIAL}/${searchValue}`);

  return data;
};
