// @generated by protoc-gen-es v2.2.2 with parameter "target=ts,import_extension=none"
// @generated from file task/service/task/v1/delete_task.proto (package task.service.task.v1, syntax proto3)
/* eslint-disable */

import type { Message } from '@bufbuild/protobuf';
import type { GenFile, GenMessage } from '@bufbuild/protobuf/codegenv1';
import { fileDesc, messageDesc } from '@bufbuild/protobuf/codegenv1';
import { file_google_api_field_behavior } from '../../../../google/api/field_behavior_pb';

/**
 * Describes the file task/service/task/v1/delete_task.proto.
 */
export const file_task_service_task_v1_delete_task: GenFile =
  /*@__PURE__*/
  fileDesc(
    'CiZ0YXNrL3NlcnZpY2UvdGFzay92MS9kZWxldGVfdGFzay5wcm90bxIUdGFzay5zZXJ2aWNlLnRhc2sudjEiJgoRRGVsZXRlVGFza1JlcXVlc3QSEQoEbmFtZRgBIAEoCUID4EECQp4BChhjb20udGFzay5zZXJ2aWNlLnRhc2sudjFCD0RlbGV0ZVRhc2tQcm90b1ABogIDVFNUqgIUVGFzay5TZXJ2aWNlLlRhc2suVjHKAhRUYXNrXFNlcnZpY2VcVGFza1xWMeICIFRhc2tcU2VydmljZVxUYXNrXFYxXEdQQk1ldGFkYXRh6gIXVGFzazo6U2VydmljZTo6VGFzazo6VjFiBnByb3RvMw',
    [file_google_api_field_behavior],
  );

/**
 * @generated from message task.service.task.v1.DeleteTaskRequest
 */
export type DeleteTaskRequest =
  Message<'task.service.task.v1.DeleteTaskRequest'> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
  };

/**
 * Describes the message task.service.task.v1.DeleteTaskRequest.
 * Use `create(DeleteTaskRequestSchema)` to create a new message.
 */
export const DeleteTaskRequestSchema: GenMessage<DeleteTaskRequest> =
  /*@__PURE__*/
  messageDesc(file_task_service_task_v1_delete_task, 0);
