'use client';

import { useEffect, useMemo, useState } from 'react';
import SiteHeader from '../../components/site-header';
import TaskCard from '../../components/task-card';
import TaskForm from '../../components/task-form';
import { apiBaseUrl } from '../../lib/api';
import type { Task } from '../../types';
import { getToken, logout } from '../../lib/auth';

const statusOptions = [
  { label: 'All', value: '' },
  { label: 'To Do', value: 'todo' },
  { label: 'In Progress', value: 'in-progress' },
  { label: 'Done', value: 'done' },
];

export default function DashboardPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const token = getToken();

  async function fetchTasks() {
    if (!token) {
      logout();
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch(`${apiBaseUrl}/tasks`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Could not load tasks');
      setTasks(data.tasks);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unexpected error');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!token) {
      window.location.href = '/login';
      return;
    }
    fetchTasks();
  }, [token]);

  const filteredTasks = useMemo(
    () => (statusFilter ? tasks.filter((task) => task.status === statusFilter) : tasks),
    [statusFilter, tasks]
  );

  async function handleDelete(taskId: string) {
    if (!token) return;
    await fetch(`${apiBaseUrl}/tasks/${taskId}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchTasks();
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <SiteHeader />
      <section className="mt-8 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <div className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">My tasks</h2>
              <p className="mt-1 text-sm text-slate-600">Track every task across statuses and team assignments.</p>
            </div>
            <div className="flex items-center gap-3">
              <label className="text-sm font-medium text-slate-700">Filter</label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="rounded-full border border-slate-300 bg-slate-50 px-4 py-2 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              >
                {statusOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {loading ? (
            <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center text-slate-600 shadow-sm">Loading tasks…</div>
          ) : error ? (
            <div className="rounded-3xl border border-rose-200 bg-rose-50 p-6 text-rose-700 shadow-sm">{error}</div>
          ) : filteredTasks.length === 0 ? (
            <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center text-slate-600 shadow-sm">No tasks found.</div>
          ) : (
            <div className="grid gap-4">
              {filteredTasks.map((task) => (
                <TaskCard key={task._id} task={task} onUpdate={fetchTasks} onDelete={() => handleDelete(task._id)} />
              ))}
            </div>
          )}
        </div>
        <TaskForm onCreate={fetchTasks} />
      </section>
    </main>
  );
}
