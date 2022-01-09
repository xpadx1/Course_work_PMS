import { Project } from '../entity/project.js';
import { Tasks } from '../entity/task.js';

import { Op } from 'sequelize';
class Filter{
    async filterTask (req, res) {

        const {
            filter,
            string
        } = req.body;

        try{
        if ( filter == '' || string == ''){
            allFilters = Object.keys(Tasks);
            res.status(403).json({
                message: 'All Filters' 
            }, allFilters);
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
        if (key !== ''){
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
        else{
            res.status(404).json({message: 'You do not enter key'});
        }
    
    }

    async filterProjectByKeyName (req, res) {
        const {
            key
        } = req.body;
        if (key !== ''){
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
        
}

export { Filter };