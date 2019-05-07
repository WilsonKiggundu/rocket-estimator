import controller from '../controllers/project.controller';

module.exports = (app) => {
  // add a new project
  app.post('/api/project', controller.create);

  // get project by projectId
  app.get('/api/project/:id', controller.read);

  // update a project with projectId
  app.put('/api/project/:id', controller.update);

  // delete a project
  app.delete('/api/project/:id', controller.delete);
};
