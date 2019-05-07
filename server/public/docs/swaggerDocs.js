import swaggerJsdoc from 'swagger-jsdoc';
import settings from '../../settings';

const options = {
  swaggerDefinition: {
    // https://swagger.io/specification/#infoObject
    info: {
      title: 'Cost Estimation API',
      version: '0.1.0',
      description: '',
      contact: {
        name: 'Wilson Kiggundu',
        url: 'http://wilsonie.wordpress.com',
        email: 'wil.kiggundu@gmail.com',
      },
      license: {
        name: 'Apache 2.0',
        url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
      },
    },
    host: `${settings.BASE_URL}:${settings.PORT}`,
    basePath: '/',
    produces: ['application/json'],
  },
  apis: ['./routes/*.routes.js', './models/*.model.js'],
};

export default swaggerJsdoc(options);
