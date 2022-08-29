export type Country = {
  name: string | null;
  topLevelDomain: string[] | null;
  alpha2Code: string | null;
  alpha3Code: string | null;
  callingCodes: string[] | null;
  capital: string[] | null;
  capitalInfo: {
    latlng: number[] | null;
  } | null;
  car: {
    side: SIDE;
    signs: string[] | null;
  };
  cca2: string | null;
  cca3: string | null;
  ccn3: string | null;
  coatOfArms: {
    png: string | null;
    svg: string | null;
  };
  altSpellings: string[] | null;
  region: string | null;
  startOfWeek: string | null;
  subregion: string;
  status: string | null;
  continents: string[] | null;
  population: number | null;
  postalCode: {
    [key: string]: string;
  } | null;
  latlng: number[] | null;
  demonyms: {
    [code: string]: {
      f: string[] | null;
      m: string[] | null;
    };
  } | null;
  flag: string[] | null;
  flags: {
    png: string | null;
    svg: string | null;
  };
  area: number | null;
  gini: {
    [key: number]: number;
  } | null;
  timezones: string[] | null;
  tld: string[] | null;
  borders: string[] | null;
  nativeName: string | null;
  numericCode: string | null;
  currencies: {
    [code: string]: { name: string | null; symbol: string | null };
  } | null;
  languages: { [key: string]: string } | null;
  unMember: boolean;
  translations: {
    [key: string]: string;
  };
  maps: {
    [key: string]: string;
  } | null;
  regionalBlocs:
    | {
        acronym: string | null;
        name: string | null;
        otherAcronyms: string[] | null;
        otherNames: string[] | null;
      }[]
    | null;
  cioc: string | null;
  independent: boolean;
  landlocked: boolean;
};

enum SIDE {
  RIGHT = "right",
  LEFT = "left",
}
