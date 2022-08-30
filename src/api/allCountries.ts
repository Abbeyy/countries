import axios from "axios";
import { ALL_COUNTRIES, FIELDS } from "../constants/endpoints";

export const queryAllCountries = async (fields?: string[]) => {
  let path = `${ALL_COUNTRIES}/`;

  if (fields?.length) {
    path += `${FIELDS}${fields.join(",")}`;
  }

  const { data } = await axios.get(`${path}`);

  return data;
};
