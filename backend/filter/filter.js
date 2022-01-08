import { Project } from '../entity/project.js';
import { Tasks } from '../entity/task.js';
const { Op } = require("sequelize");
class Filter{
    async filterTask (req, res) {

        const {
            filter,
            string
        } = req.body;

        try{
        if ( filter == '' || string == ''){
            res.status(403).json({
                message: 'You have not entered data' 
            });
        }
        else{
        const values = string.split(',');
        const tasks = await Tasks.findAll({
            where: {
                [filter]: values
            }
        });
        res.json(tasks);
        }
        }
        catch (e) {
            res.json(e);
        }
    }

    async filterTasksByKey (req, res) {
        const {
            key
        } = req.body;
        try{
            const tasks = await Tasks.findAll({
                where: {
                    [Op.or]: [
                      { name: {[Op.substring]: key} },
                      { description: {[Op.substring]: key} },
                      { id: {[Op.substring]: key}},
                      { idexecutor: {[Op.substring]: key} },
                    ]
                  }
            });
            res.json(tasks);
        }
        catch(e){
            res.json(e);
        }
    }

    async filterProjectByKeyName (req, res) {
        const {
            key
        } = req.body;
        try {
            const tasks = await Project.findAll({
                where: {
                    name: {[Op.substring]: key}
                }
            });
        }
        catch(e){
            res.json(e);
        }
    }
        
}

export { Filter };