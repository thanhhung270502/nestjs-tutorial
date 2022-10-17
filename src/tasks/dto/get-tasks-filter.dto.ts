import { IsEnum, IsOptional, IsString } from 'class-validator';
import { isString } from 'util';
import { TaskStatus } from './../task.model';
export class GetTasksFilterDto {
    @IsOptional()
    @IsEnum(TaskStatus)
    status?: TaskStatus;

    @IsOptional()
    @IsString()
    search?: string;
}