import axios from 'axios';
import { appConfig } from '../config/Environment';
import { Covid } from '../models/country';

export class DiseaseShService {
  private static readonly host: string = appConfig.diseaseShApi.host;

  public async getCountriesJhucsse(): Promise<Covid.JhucsseCountries[]> {
    return await axios.get(`${DiseaseShService.host}jhucsse`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.warn(error);
      return null;
    });
  }

  public async getCountriesWorldometers(): Promise<Covid.JhucsseCountries[]> {
    const countries: Covid.WorldometerCountries[] = await axios.get(`${DiseaseShService.host}countries`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.warn(error);
      return null;
    });

    return countries.map((country) => ({
      country: country.country,
      county: '',
      updatedAt: country.updated.toString(),
      stats: {
        confirmed: country.cases,
        deaths: country.deaths,
        recovered: country.recovered,
      },
      coordinates: {
        latitude: country.countryInfo.lat.toString(),
        longitude: country.countryInfo.long.toString()
      },
      province: '',
      flag: country.countryInfo.flag
    }));
  }
}