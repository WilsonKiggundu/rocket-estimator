import controller from '../controllers/task.controller';

module.exports = (app) => {
  /**
   * @swagger
   * /api/task:
   *      post:
   *        summary: "Create task"
   *        description: "This allows creation of a new task"
   *        produces: "application/json"
   *        responses:
   *          200:
   *            description: "success"
   *          500:
   *            description: "internal server error"
   */
  app.post('/api/task', controller.create);

  // get tasks by projectId
  app.get('/api/task/:projectId', controller.findByProjectId);

  // update a task with projectId
  app.put('/api/task/:id', controller.update);

  // delete a task
  app.delete('/api/task/:id', controller.delete);
};
