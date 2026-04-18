import Link from 'next/link';
import { CheckCircle, Users, BarChart3, Zap } from 'lucide-react';

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-12 sm:px-8 lg:px-12">
      <section className="w-full rounded-3xl bg-white p-12 shadow-elegant animate-fade-in">
        <div className="space-y-8 text-center">
          <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-4">
            <CheckCircle className="h-8 w-8 text-white" />
          </div>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Enterprise Task Management</p>
          <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            Streamline Your Team's
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Productivity
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-600">
            A sophisticated platform for managing tasks, tracking progress, and collaborating seamlessly.
            Built for modern teams who demand excellence.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/register"
              className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:shadow-xl hover:scale-105"
            >
              Start Free Trial
            </Link>
            <Link
              href="/login"
              className="rounded-full border-2 border-slate-300 px-8 py-4 text-lg font-semibold text-slate-700 transition hover:bg-slate-50 hover:border-slate-400"
            >
              Sign In
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: Users, title: 'Team Collaboration', description: 'Seamless task assignment and real-time updates for your entire team.' },
          { icon: BarChart3, title: 'Advanced Analytics', description: 'Track productivity metrics and project progress with detailed insights.' },
          { icon: Zap, title: 'Lightning Fast', description: 'Optimized performance with modern architecture and efficient data handling.' },
          { icon: CheckCircle, title: 'Task Automation', description: 'Automate workflows and reduce manual effort with smart task management.' },
        ].map((feature, index) => (
          <article key={feature.title} className="rounded-2xl bg-white p-8 shadow-lg transition hover:shadow-xl hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-600">
              <feature.icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
            <p className="mt-3 text-slate-600">{feature.description}</p>
          </article>
        ))}
      </section>

      <section className="mt-20 w-full rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 p-12 text-white shadow-elegant">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Ready to Transform Your Workflow?</h2>
          <p className="mt-4 text-lg text-slate-300">Join thousands of teams already using our platform.</p>
          <Link
            href="/register"
            className="mt-8 inline-block rounded-full bg-white px-8 py-4 text-lg font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </main>
  );
}
