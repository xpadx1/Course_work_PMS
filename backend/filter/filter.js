import { Tasks } from '../entity/task.js';

class Filter{
    async filterTask (req, res) {

        const {
            filter,
            string
        } = req.body;

        try{
        const values = string.split(',');
        const tasks = await Tasks.findAll({
            where: {
                [filter]: values
            }
        });
        res.json(tasks);
        }
        catch (e) {
            res.json(e);
        }
    }
        
}

export { Filter };
