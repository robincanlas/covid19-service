export namespace Covid {
  export interface WorldometerCountries {
    updated: number;
    country: string;
    countryInfo: {
      _id: number;
      iso2: string;
      iso3: string;
      lat: number;
      long: number;
      flag: string
    };
    cases: number;
    todayCases: number;
    deaths: number;
    todayDeaths: number;
    recovered: number;
    todayRecovered: number;
    active: number;
    critical: number;
    casesPerOneMillion: number;
    deathsPerOneMillion: number;
    tests: number;
    testsPerOneMillion: number;
    population: number;
    continent: number;
    oneCasePerPeople: number;
    oneDeathPerPeople: number;
    oneTestPerPeople: number;
    activePerOneMillion: number;
    recoveredPerOneMillion: number;
    criticalPerOneMillion: number;
  }

  export interface JhucsseCountries {
    country: string;
    county: string;
    updatedAt: string;
    stats: {
      confirmed: number;
      deaths: number;
      recovered: number;
    };
    coordinates: {
      latitude: string;
      longitude: string;
    };
    province: string;
    flag: string;
  }
}