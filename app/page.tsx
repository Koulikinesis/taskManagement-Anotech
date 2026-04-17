import Link from 'next/link';

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <section className="w-full rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
        <div className="space-y-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-indigo-600">Team Task Management</p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Build focus, assign work, track progress.
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-7 text-slate-600">
            A lightweight productivity tool with secure authentication, task workflows, and meaningful team coordination.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/register" className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700">
              Get started
            </Link>
            <Link href="/login" className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
              Login
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-12 grid gap-6 sm:grid-cols-3">
        {[
          { title: 'Authentication', description: 'Register, login, protected routes, and secure session handling.' },
          { title: 'Task workflows', description: 'Create, edit, delete, filter, and track statuses for real tasks.' },
          { title: 'Responsive UI', description: 'Clean Tailwind interface with accessible interactions.' },
        ].map((card) => (
          <article key={card.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">{card.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{card.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
