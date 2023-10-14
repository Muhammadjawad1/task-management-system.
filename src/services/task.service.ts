import { BaseTask, Task, StatusEnum } from "../model/task.interface";
import { Tasks } from "../model/tasks.interface";


let tasks: Tasks = {
    1: {
      id: 1,
      title: "Burger",
      description: "Tasty",
      assigned_To: "Muhammad",
      category: "urgent",
      status: StatusEnum.Pending
      },
    2: {
      id: 2,
      title: "Burger",
      description: "Tasty",
      assigned_To: "Jawad",
      category: "normal",
      status: StatusEnum.Pending
    },
    3: {
      id: 3,
      title: "Burger",
      description: "Tasty",
      assigned_To: "Ali",
      category: "normal",
      status: StatusEnum.Pending
    }
};

export const findAll = async (): Promise<Task[]> => Object.values(tasks);

export const find = async (id: number): Promise<Task> => tasks[id];

export const create = async (newtask: BaseTask): Promise<Tasks> => {
    const id = new Date().valueOf();
    tasks[id] = {
      id,
      ...newtask,
    };
  
    return tasks;
};

export const update = async (
    id: number,
    taskUpdate: BaseTask
    ): Promise<Task | null> => {
    const task = await find(id);

    if (!task) {
        return null;
    }

    tasks[id] = { id, ...taskUpdate };

    return tasks[id];
};

export const remove = async (id: number): Promise<null | void> => {
    const task = await find(id);
  
    if (!task) {
      return null;
    }
  
    delete tasks[id];
};

export const findByName = async (value: string, type: string): Promise<any> => {
  const tasks = await findAll();
  let task:any;
  tasks.forEach(element => {
    if (type == "assigned_To") {
      if (element.assigned_To == value) {
        task = element;
      }
    }else{
      if (element.category == value) {
        task = element;
      }
    }
  });
  return task;
};