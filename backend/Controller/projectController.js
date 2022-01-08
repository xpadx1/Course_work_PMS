'use strict';

import { Project } from '../entity/project.js';
import { UserProjects } from '../entity/userProject.js';

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

    async assignExecutor(req, res){
        try {
            const {
                idexecutor,
                idproject,
            } = req.body;
            const post = await UserProjects.create({
                idexecutor,
                idproject,
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
                idproject,
                item,
                tochange
            } = req.body;
            const project = await Project.findOne({
                where: {
                    id: idproject
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
            const projectForDelete = await Project.findOne({
                where: {
                    id: id
                }
            });
            projectForDelete.destroy();
                res.json({
                    message: "project was deleted"
                });   
        }
        catch(e){
            res.json(e);
        }
       
        
    }

}

export { projectContoller }