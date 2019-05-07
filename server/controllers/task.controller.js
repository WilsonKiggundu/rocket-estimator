import { Types } from 'mongoose';
import Task from '../models/task.model';

// create and save a task
exports.create = async (req, res) => {
  // validate the request
  if (!req.body) {
    res.status(500);
    return res.send('The request body can not be null');
  }

  if (!req.body.projectId) {
    res.status(500);
    return res.send('projectId is required');
  }

  // create a task
  try {
    const task = await Task.create(req.body);

    res.status(201);

    return res.json(task);
  } catch (error) {
    res.status(500);
    return res.send({ error: error.message });
  }
};

// retrieve and return all tasks by projectId
exports.findByProjectId = (req, res) => {
  if (!req.params.projectId) {
    res.status(500);
    return res.send({ message: 'Project Id is missing' });
  }
  Task.find({ projectId: req.params.projectId })
    .then((tasks) => {
      res.status(200);
      return res.send(tasks);
    })
    .catch((err) => {
      res.status(500);
      return res.send({ message: err });
    });

  return res.send(null);
};

// update a task identified by the task Id
exports.update = (req, res) => {
  const { id } = req.params;

  if (!id) {
    res.status(500);
    return res.send({ message: 'Provide the task id' });
  }

  if (Types.ObjectId.isValid(id)) {
    Task.updateOne({ _id: id }, req.body)
      .then(() => {
        res.status(200);
        return res.send(req.body);
      })
      .catch((err) => {
        res.status(500);
        return res.send({ message: err });
      });
  }
  res.status(500);
  return res.send({ message: 'Invalid task id' });
};

// delete a task
exports.delete = (req, res) => {
  const { id } = req.params;

  if (Types.ObjectId.isValid(id)) {
    Task.remove({ _id: req.params.id })
      .then(() => res.status(200).send({ message: 'Task deleted' }))
      .catch(err => res.status(500).send({ message: err }));
  } else {
    res.status(500).send({ message: 'Invalid task id' });
  }
};
