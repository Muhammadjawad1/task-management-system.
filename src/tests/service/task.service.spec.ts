import { BaseTask, StatusEnum } from '../../model/task.interface';
import { find, findAll, create, update, remove, findByName} from '../../services/task.service';

describe('User Service Tests', () => {

  test('Getting all tasks', async () => {
    const findAllTasks =  await findAll();
    expect(findAllTasks).toBeDefined();
  });

  test('Getting a task by ID', async () => {
    const findTask = await find(1);
    expect(findTask?.id).toBeDefined();
  });

  test('Create Task', async () => {
    let newTask: BaseTask ={
      "title": "jawad",
      "description": "Jawad123",
      "assigned_To": "Muhammad",
      "category": "normal",
      status: StatusEnum.Pending,
  }
    const Task = await create(newTask);
    expect(Task).toBeDefined();
  });

  test('Update a task by ID', async () => {
    let modifiedTask: BaseTask = {
      "title": "jawad updated",
      "description": "Jawad123",
      "assigned_To": "Muhammad",
      "category": "normal",
      status: StatusEnum.Completed
  }
  let id:number = 1;
  const Task = await update(id, modifiedTask);
    expect(Task?.id).toBeDefined();
  });

  test('Delete a task by ID', async () => {
    const Task = await remove(1);;
  });

  test('Get a task by assignedTo', async () => {
    let type = "assigned_To";
    let value = "Jawad"
    const findTask = await findByName(value, type);
    expect(findTask?.id).toBeDefined();
  });

});