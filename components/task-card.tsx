'use client';

import type { Task } from '../types';
import { apiBaseUrl } from '../lib/api';

export default function TaskCard({ task, onUpdate, onDelete }: { task: Task; onUpdate: () => Promise<void>; onDelete: () => Promise<void> }) {
  async function toggleStatus() {
    const nextStatus = task.status === 'todo' ? 'in-progress' : task.status === 'in-progress' ? 'done' : 'todo';
    await fetch(`${apiBaseUrl}/tasks/${task._id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('task-manager-token')}` },
      body: JSON.stringify({ status: nextStatus }),
    });
    onUpdate();
  }

  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{task.status.replace('-', ' ').toUpperCase()}</p>
          <h2 className="mt-2 text-lg font-semibold text-slate-900">{task.title}</h2>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">{new Date(task.dueDate).toLocaleDateString()}</span>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-600">{task.description}</p>
      {task.assigneeEmail ? <p className="mt-3 text-sm text-slate-500">Assigned to {task.assigneeEmail}</p> : null}
      <div className="mt-6 flex flex-wrap gap-3">
        <button
          onClick={toggleStatus}
          className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
        >
          Move to {task.status === 'todo' ? 'In Progress' : task.status === 'in-progress' ? 'Done' : 'To Do'}
        </button>
        <button
          onClick={onDelete}
          className="rounded-full border border-rose-200 px-4 py-2 text-sm font-semibold text-rose-600 transition hover:bg-rose-50"
        >
          Delete
        </button>
      </div>
    </article>
  );
}
