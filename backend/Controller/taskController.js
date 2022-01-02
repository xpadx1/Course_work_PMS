import { Tasks } from '../entity/task.js';

class taskController {

  async createtask(req, res) {
    try {
      const {name, idcreator, description, idexecutor, type} = req.body;
      const post = await Tasks.create({name, idcreator, description, idexecutor, type});
      res.json(post);

    } catch(e) {
      res.json(e);
    }
  }

  async getMyTasks(req, res) {
    try {
      const {id} = req.body;

      // add check on access other humans tasks 
      const tasks = await Tasks.findAll({ where: { idexecutor: id } });
      res.json(tasks);

    } catch(e) {
      res.json(e);
    }
  }

  async updataTaskType(req, res) {
    try {
      const {id, idexecutor, type} = req.body;
      const task = await Tasks.findOne({ where: { id: id } });

      // check access to change type. Only for EXECUTOR
      if (idexecutor != task.idexecutor) {
        res.status(403).json({message: 'You have no access to this task'});
      }
      else {
        task.type = type;
        task.save();
        res.json(task);
      }

    } catch(e) {
      res.json(e);
    }
  }

  async getOneTask(req, res) {
    try {
      const id = req.params.id;
      const { idexecutor } = req.body;
      const task = await Tasks.findOne({ where: { id: id } });

      // check access to change type. Only for EXECUTOR
      if (idexecutor != task.idexecutor) {
        res.status(403).json({message: 'You have no access to this task'});
      }
      else {
        res.json(task);
      }

    } catch(e) {
      res.json(e);
    }
  }

  async deleteTask(req, res) {
    try {
      const id = req.params.id;
      const { idexecutor } = req.body;
      const task = await Tasks.findOne({ where: { id: id } });
      
      // check access to change type. Only for EXECUTOR
      if (idexecutor != task.idexecutor) {
        res.status(403).json({message: 'You have no access to this task'});
      }
      else {
        task.destroy();
        res.json({message: "task was deleted"});
      }

    } catch(e) {
      res.json(e);
    }
  }

}

export {taskController};