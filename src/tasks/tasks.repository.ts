import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EntityRepository, Repository } from "typeorm";
import { Task } from "./task.entity";


export class TasksRepository extends Repository<Task> {
    // @InjectRepository(Task)
    // tasksRepository: Repository<Task>
}
// export const TasksRepository = getRepository(Task)

// @Injectable()
// export class PersonService {
//   constructor(
//     @Inject(TasksRepository)
//     private readonly personRepository: TasksRepository,
//   ) {}
// }