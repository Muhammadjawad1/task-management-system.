import express, { Request, Response } from "express";
import * as taskService from "../services/task.service";
import { BaseTask, Task } from "../model/task.interface";
import { auth } from "../middleware/auth";
import {CustomError} from "../middleware/error-handler"
export const taskRouter = express.Router();

taskRouter.get("/tasks", auth, async (req: Request, res: Response, next) => {
    try {
      const tasks: Task[] = await taskService.findAll();
      if(!tasks){
        throw new CustomError('Resource not found', 404);
      }
      let count = tasks.length;
      let result = {
        data: tasks,
        totalRecords: count,
      }
      res.status(200).send(result);
    } catch (e:any) {
      next(e);
    }
  });
  
  // GET tasks/:id
  
  taskRouter.get("/task/:id", auth, async (req: Request, res: Response, next) => {
    const id: number = parseInt(req.params.id, 10);
  
    try {
      const task: Task = await taskService.find(id);
  
      if (task) {
        return res.status(200).send(task);
      }
  
      res.status(404).send("task not found");
    } catch (e:any) {
      next(e);
    }
  });
  
  // POST tasks  
  taskRouter.post("/task/", auth, async (req: Request, res: Response, next) => {
    try {
      const task: BaseTask = req.body;
      const newtask = await taskService.create(task);
  
      res.status(201).json(newtask);
    } catch (e:any) {
      next(e);
    }
  });
  
  // PUT tasks/:id
  
  taskRouter.put("/task/:id",  auth, async (req: Request, res: Response, next) => {
    const id: number = parseInt(req.params.id, 10); 
    try {
      const taskUpdate: Task = req.body;
  
      const existingtask: Task = await taskService.find(id);
  
      if (existingtask) {
        const updatedtask = await taskService.update(id, taskUpdate);
        return res.status(200).json(updatedtask);
      }
  
      const newtask = await taskService.create(taskUpdate);
  
      res.status(201).json(newtask);
    } catch (e:any) {
      next(e);
    }
  });
  
  // DELETE tasks/:id
  
  taskRouter.delete("/task/:id",  auth, async (req: Request, res: Response, next) => {
    try {
      const id: number = parseInt(req.params.id, 10);
      await taskService.remove(id);
  
      res.sendStatus(204);
    } catch (e:any) {
      next(e);
    }
  });

  // GET tasks by Assign_to and category 
taskRouter.get("/task", auth, async (req: Request, res: Response, next) => {
  try {
    console.log(req.query.assignedTo)
    console.log(req.query.category)

    let assignedTo = req.query.assignedTo;
    let category = req.query.category;
    let type: string="";
    let value: string = "";
    if(assignedTo){
      value = assignedTo?.toString() || "";
      type = "assigned_To"
    }
    if(category){
      value = category?.toString() || "";
      type = "category"
    }
    const task = await taskService.findByName(value, type);

    if (task) {
      return res.status(200).send(task);
    }

    res.status(404).send("task not found");
  } catch (e:any) {
    next(e);
  }
});
