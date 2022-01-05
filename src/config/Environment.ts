import * as dotenv from 'dotenv';

// INITIALIZE dot env
dotenv.config();

export enum ENV {
  PROD = 'production',
  DEV = 'development'
}

export const appConfig = {
  environment: process.env.NODE_ENV,
  port: process.env.NODE_ENV === ENV.PROD ? process.env.PORT : process.env.SERVER_PORT,
  swaggerEnable: process.env.SWAGGER_ENABLE,
  masterPassword: process.env.MASTER_PASSWORD,
  positionStackApi: {
    host: process.env.POSITION_STACK_API,
    access_key: process.env.POSITION_STACK_API_ACCESS_KEY
  }
};
