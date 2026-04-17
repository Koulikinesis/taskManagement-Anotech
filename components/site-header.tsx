'use client';

import Link from 'next/link';
import { logout } from '../lib/auth';

export default function SiteHeader() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-indigo-600">Task Manager</p>
        <h1 className="text-xl font-semibold text-slate-900">Team workspace</h1>
      </div>
      <nav className="flex items-center gap-3">
        <Link href="/dashboard" className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
          Dashboard
        </Link>
        <button onClick={logout} className="rounded-full bg-rose-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-rose-600">
          Logout
        </button>
      </nav>
    </header>
  );
}
