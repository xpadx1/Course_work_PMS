import { Project } from '../entity/project.js';
import { Tasks } from '../entity/task.js';
import { User } from '../entity/user.js';

class Sort {
    async sortData (req, res) {
        const {
            Base,
            Row
        } = req.body;
        let DataBase;
        DataBase = (Base == 'project') ? Project :
        (Base == 'user') ? User :
        (Base == 'task') ? Tasks :
        null;
        if (DataBase !== null) {
            try {
            const sortResult = await DataBase.findAll({
                order: [[sortfield || Row, sortOrder || 'DESC']]
            })
            res.json(sortResult);
            }
            catch(e){
                res.json(e);
            }
        } 
        else{
            res.status(404).json({ message: 'You enter wrond Base'});
        }
    }
}

export { Sort };