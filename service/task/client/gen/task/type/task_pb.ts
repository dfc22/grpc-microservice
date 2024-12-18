// @generated by protoc-gen-es v2.2.2 with parameter "target=ts,import_extension=none"
// @generated from file task/type/task.proto (package task.type, syntax proto3)
/* eslint-disable */

import type { Message } from '@bufbuild/protobuf';
import type { GenFile, GenMessage } from '@bufbuild/protobuf/codegenv1';
import { fileDesc, messageDesc } from '@bufbuild/protobuf/codegenv1';
import type { Timestamp } from '@bufbuild/protobuf/wkt';
import { file_google_protobuf_timestamp } from '@bufbuild/protobuf/wkt';
import { file_google_api_field_behavior } from '../../google/api/field_behavior_pb';
import type { User } from '../../user/type/user_pb';
import { file_user_type_user } from '../../user/type/user_pb';

/**
 * Describes the file task/type/task.proto.
 */
export const file_task_type_task: GenFile =
  /*@__PURE__*/
  fileDesc(
    'ChR0YXNrL3R5cGUvdGFzay5wcm90bxIJdGFzay50eXBlIpIBCgRUYXNrEgwKBG5hbWUYASABKAkSFAoMZGlzcGxheV9uYW1lGAIgASgJEhUKDWFzc2lnbmVlX25hbWUYAyABKAkSJgoIYXNzaWduZWUYBCABKAsyDy51c2VyLnR5cGUuVXNlckID4EEDEicKA2R1ZRgFIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBCXwoNY29tLnRhc2sudHlwZUIJVGFza1Byb3RvUAGiAgNUVFiqAglUYXNrLlR5cGXKAglUYXNrXFR5cGXiAhVUYXNrXFR5cGVcR1BCTWV0YWRhdGHqAgpUYXNrOjpUeXBlYgZwcm90bzM',
    [
      file_google_protobuf_timestamp,
      file_google_api_field_behavior,
      file_user_type_user,
    ],
  );

/**
 * @generated from message task.type.Task
 */
export type Task = Message<'task.type.Task'> & {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: string display_name = 2;
   */
  displayName: string;

  /**
   * @generated from field: string assignee_name = 3;
   */
  assigneeName: string;

  /**
   * @generated from field: user.type.User assignee = 4;
   */
  assignee?: User;

  /**
   * @generated from field: google.protobuf.Timestamp due = 5;
   */
  due?: Timestamp;
};

/**
 * Describes the message task.type.Task.
 * Use `create(TaskSchema)` to create a new message.
 */
export const TaskSchema: GenMessage<Task> =
  /*@__PURE__*/
  messageDesc(file_task_type_task, 0);
