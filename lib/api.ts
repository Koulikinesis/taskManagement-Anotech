export const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';

export type TaskStatus = 'todo' | 'in-progress' | 'done';

export interface TaskPayload {
  title: string;
  description: string;
  dueDate: string;
  status: TaskStatus;
  assigneeEmail?: string;
}
