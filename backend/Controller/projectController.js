'use strict';

import { Project } from '../entity/project.js';

class projectContoller {

    async createProject (req, res) {
        try {
            const {
                name,
                type,
                description
            } = req.body;
            const post = await Project.create({
                name,
                type,
                description
            });
            res.json(post);

        } catch (e) {
            res.json(e);
        }
    }

    async getAllProjects (req, res) {
        try{
            const projects = await Project.findAll();
            res.json(projects)
        }
        catch(e){
            res.json(e);
        }
    }

    async updateProject (req, res) {
        try{
            const {
                projectid,
                item,
                tochange
            } = req.body;
            const project = await Project.findOne({
                where: {
                    id: projectid
                }
            });
            project[item] = tochange;
            project.save();
            res.json(project);
        }
        catch(e){
            res.json(e);
        }
    }

    async deleteProjects (req, res) {
        try{
            const {
                id
            } = req.body
            const projectForDelete = await Tasks.findOne({
                where: {
                    id: id
                }
            });
            projectForDelete.destroy();
                res.json({
                    message: "task was deleted"
                });   
        }
        catch(e){
            res.json(e);
        }
       
        
    }

}

export { projectContoller }