const swaggerAutogen = require('swagger-autogen')();
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const port = +process.env.SERVER_PORT || 7000;
const host = process.env.NODE_ENV === 'production' ? 'robincanlas-server.herokuapp.com' : `localhost:${port}`;
const outputFile = './src/swagger.json';
const entryFile = [path.join(__dirname, 'src', 'controllers', 'index.ts')];

const doc = {
  info: {
    title: 'NodeJS Typescript',
    description: process.env.NODE_ENV + port,
  },
  host: host,
  schemes: ['http', 'https'],
};

const output = outputFile;
const enrty = entryFile;

swaggerAutogen(output, enrty, doc);