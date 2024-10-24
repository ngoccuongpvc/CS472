import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('here')
console.log(`${__dirname}/../routes/*.js`)
export const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Dictionary Swagger API',
      version: '1.0.0',
      description: 'Online Dictionary Swagger Documentation',
    },
  },
  apis: [`src/routes/dictionary.js`],
};

const specs = swaggerJsdoc(options);
export {specs, swaggerUi}
