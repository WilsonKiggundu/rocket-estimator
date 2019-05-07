import express from 'express';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import swaggerSpecs from './public/docs/swaggerDocs';
import tasksRouter from './routes/task.routes';
import projectsRouter from './routes/project.routes';
import settings from './settings';
import db from './lib/db';

const app = express();

// use static files
app.use(express.static('./public'));

// parse requests of Content-Type application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

// parse requests of Content-Type application/json
app.use(bodyParser.json());

// add swagger documentation
app.use(
  '/docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpecs, {
    explorer: true,
    customCss: '.topbar {display: none}',
  }),
);

app.get('/docs.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(swaggerSpecs);
});

// add routers
tasksRouter(app);
projectsRouter(app);

// mongo database connection
db.connect(settings.database)
  .then(() => {
    app.listen(settings.PORT, () => {
      console.log(`Server running on port ${settings.PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = app;
