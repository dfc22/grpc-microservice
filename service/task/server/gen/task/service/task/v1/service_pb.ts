// @generated by protoc-gen-es v2.2.2 with parameter "target=ts,import_extension=none"
// @generated from file task/service/task/v1/service.proto (package task.service.task.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenService } from '@bufbuild/protobuf/codegenv1';
import { fileDesc, serviceDesc } from '@bufbuild/protobuf/codegenv1';
import type { EmptySchema } from '@bufbuild/protobuf/wkt';
import { file_google_protobuf_empty } from '@bufbuild/protobuf/wkt';
import { file_google_api_annotations } from '../../../../google/api/annotations_pb';
import type { TaskSchema } from '../../../type/task_pb';
import { file_task_type_task } from '../../../type/task_pb';
import type { CreateTaskRequestSchema } from './create_task_pb';
import { file_task_service_task_v1_create_task } from './create_task_pb';
import type { DeleteTaskRequestSchema } from './delete_task_pb';
import { file_task_service_task_v1_delete_task } from './delete_task_pb';
import type {
  ListTasksRequestSchema,
  ListTasksResponseSchema,
} from './list_tasks_pb';
import { file_task_service_task_v1_list_tasks } from './list_tasks_pb';

/**
 * Describes the file task/service/task/v1/service.proto.
 */
export const file_task_service_task_v1_service: GenFile =
  /*@__PURE__*/
  fileDesc(
    'CiJ0YXNrL3NlcnZpY2UvdGFzay92MS9zZXJ2aWNlLnByb3RvEhR0YXNrLnNlcnZpY2UudGFzay52MTLCAgoLVGFza1NlcnZpY2USbgoJTGlzdFRhc2tzEiYudGFzay5zZXJ2aWNlLnRhc2sudjEuTGlzdFRhc2tzUmVxdWVzdBonLnRhc2suc2VydmljZS50YXNrLnYxLkxpc3RUYXNrc1Jlc3BvbnNlIhCC0+STAgoSCC92MS90YXNrEl4KCkNyZWF0ZVRhc2sSJy50YXNrLnNlcnZpY2UudGFzay52MS5DcmVhdGVUYXNrUmVxdWVzdBoPLnRhc2sudHlwZS5UYXNrIhaC0+STAhA6BHRhc2siCC92MS90YXNrEmMKCkRlbGV0ZVRhc2sSJy50YXNrLnNlcnZpY2UudGFzay52MS5EZWxldGVUYXNrUmVxdWVzdBoWLmdvb2dsZS5wcm90b2J1Zi5FbXB0eSIUgtPkkwIOKgwvdjEve3Rhc2svKn1CmwEKGGNvbS50YXNrLnNlcnZpY2UudGFzay52MUIMU2VydmljZVByb3RvUAGiAgNUU1SqAhRUYXNrLlNlcnZpY2UuVGFzay5WMcoCFFRhc2tcU2VydmljZVxUYXNrXFYx4gIgVGFza1xTZXJ2aWNlXFRhc2tcVjFcR1BCTWV0YWRhdGHqAhdUYXNrOjpTZXJ2aWNlOjpUYXNrOjpWMWIGcHJvdG8z',
    [
      file_google_api_annotations,
      file_google_protobuf_empty,
      file_task_type_task,
      file_task_service_task_v1_list_tasks,
      file_task_service_task_v1_create_task,
      file_task_service_task_v1_delete_task,
    ],
  );

/**
 * @generated from service task.service.task.v1.TaskService
 */
export const TaskService: GenService<{
  /**
   * @generated from rpc task.service.task.v1.TaskService.ListTasks
   */
  listTasks: {
    methodKind: 'unary';
    input: typeof ListTasksRequestSchema;
    output: typeof ListTasksResponseSchema;
  };
  /**
   * @generated from rpc task.service.task.v1.TaskService.CreateTask
   */
  createTask: {
    methodKind: 'unary';
    input: typeof CreateTaskRequestSchema;
    output: typeof TaskSchema;
  };
  /**
   * @generated from rpc task.service.task.v1.TaskService.DeleteTask
   */
  deleteTask: {
    methodKind: 'unary';
    input: typeof DeleteTaskRequestSchema;
    output: typeof EmptySchema;
  };
}> = /*@__PURE__*/ serviceDesc(file_task_service_task_v1_service, 0);
