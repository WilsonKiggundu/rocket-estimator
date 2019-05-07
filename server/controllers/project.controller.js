import { Types } from 'mongoose';
import Project from '../models/project.model';

// create a new project
exports.create = async (req, res) => {
  if (!req.body) {
    res.status(500);
    return res.send('Invalid request.');
  }
  if (!req.body.name) {
    res.status(500);
    return res.send('Project name is missing.');
  }

  if (typeof req.body.name !== 'string') {
    res.status(500);
    return res.send('Project name is invalid. It should be a string');
  }

  try {
    const project = await Project.create(req.body);
    res.status(201);
    return res.json(project);
  } catch (error) {
    res.status(500);
    return res.send({ error: error.message });
  }
};

// get project by Id
exports.read = async (req, res) => {
  const { id } = req.params;

  if (!Types.ObjectId.isValid(id)) {
    res.status(500);
    return res.send('Invalid project id');
  }
  try {
    const project = await Project.find({ _id: req.params.id });
    res.status(200);

    return res.json(project);
  } catch (err) {
    res.status(500);
    return res.send({ error: err.message });
  }
};

// update a project
exports.update = async (req, res) => {
  if (!req.body) {
    res.status(500);
    return res.send('Invalid request.');
  }

  if (!req.body.name) {
    res.status(500);
    return res.send('Project name is missing.');
  }

  if (typeof req.body.name !== 'string') {
    res.status(500);
    return res.send('Project name is invalid. It should be a string');
  }

  const { id } = req.params;

  try {
    const project = await Project.updateOne({ _id: id });
    res.status(200);
    return res.json(project);
  } catch (error) {
    res.status(500);
    return res.send({ error: error.message });
  }
};

// delete a project
exports.delete = async (req, res) => {
  const { id } = req.params;

  if (!Types.ObjectId.isValid(id)) {
    res.status(500);
    return res.send({ message: 'Invalid project id' });
  }

  try {
    await Project.remove({ _id: id });
    res.status(200);

    return res.send('Project deleted successfully');
  } catch (err) {
    res.status(500);
    return res.send({ message: err.message });
  }
};
