export type Country = {
  alpha2Code: string | null;
  alpha3Code: string | null;
  altSpellings: string[] | null;
  area: number | null;

  borders: string[] | null;

  callingCodes: string[] | null;
  capital: string[] | null;
  capitalInfo: {
    latlng: number[] | null;
  } | null;
  car: {
    side: SIDE;
    signs: string[] | null;
  } | null;
  cca2: string | null;
  cca3: string | null;
  ccn3: string | null;
  cioc: string | null;
  coatOfArms: {
    png: string | null;
    svg: string | null;
  } | null;
  continents: string[] | null;
  currencies: {
    [code: string]: { name: string | null; symbol: string | null };
  } | null;

  demonyms: {
    [code: string]: {
      f: string | null;
      m: string | null;
    };
  } | null;

  fifa: string | null;
  flag: string[] | null;
  flags: {
    png: string | null;
    svg: string | null;
  };

  gini: {
    [code: number]: number;
  } | null;

  idd: {
    root: string | null;
    suffixes: string[] | null;
  } | null;
  independent: boolean | null;

  landlocked: boolean | null;
  languages: {
    [code: string]: string;
  } | null;
  latlng: number[] | null;

  maps: {
    googleMaps: string | null;
    openStreetMaps: string | null;
  } | null;

  name: {
    common: string | null;
    official: string | null;
    nativeName: {
      [code: string]: {
        official: string | null;
        common: string | null;
      };
    };
  } | null;
  nativeName: string | null;
  numericCode: string | null;

  population: number | null;
  postalCode: {
    format: string | null;
    regex: string | null;
  } | null;

  region: string | null;
  regionalBlocs:
    | {
        acronym: string | null;
        name: string | null;
        otherAcronyms: string[] | null;
        otherNames: string[] | null;
      }[]
    | null;

  startOfWeek: string | null;
  status: string | null;
  subregion: string;

  timezones: string[] | null;
  tld: string[] | null;
  topLevelDomain: string[] | null;

  translations: {
    [code: string]: {
      official: string | null;
      common: string | null;
    };
  };

  unMember: boolean | null;
};

enum SIDE {
  RIGHT = "right",
  LEFT = "left",
}
