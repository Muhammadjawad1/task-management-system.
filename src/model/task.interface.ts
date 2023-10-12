export interface BaseTask {
  title: string;
  description?: string;
  creation?:  Date;
  due?: Date;
  assigned_To: string;
  category: string;
  status:  StatusEnum;
  }
  
export interface Task extends BaseTask {
  id: number;
}

export enum StatusEnum {
  Pending = "Pending",
  Completed= "Completed"
}
