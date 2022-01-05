import {
  Get,
  Route,
  SuccessResponse,
  Response,
  Tags,
  Path
} from 'tsoa';
import { Covid } from '../models';
import { DiseaseShService } from '../services';
import { BaseController } from './';

@Tags('Covid-19 service')
@Route('covid19')
export class Covid19Controller extends BaseController {
  private diseaseShService: DiseaseShService = new DiseaseShService();

  @SuccessResponse(201, 'Success')
  @Response(400, 'Bad Request')
  @Response(500, 'Service Error')
  @Get('list/jhucsse')
  public async getCountriesJhucsse(): Promise<Covid.JhucsseCountries[]> {
    return await this.diseaseShService.getCountriesJhucsse();
  }

  @SuccessResponse(201, 'Success')
  @Response(400, 'Bad Request')
  @Response(500, 'Service Error')
  @Get('list/worldometers')
  public async getCountriesWorldometers(): Promise<Covid.JhucsseCountries[]> {
    return await this.diseaseShService.getCountriesWorldometers();
  }
  
}