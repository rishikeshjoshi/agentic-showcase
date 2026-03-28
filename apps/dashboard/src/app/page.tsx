"use client";
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/tasks')
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(console.error);
  }, []);

  return (
    <div className="bg-slate-900 text-emerald-500 min-h-screen p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">Agentic Monorepo Monitor</h1>
        <div className="text-xl">Time: {new Date().toLocaleTimeString()}</div>
      </header>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="border border-emerald-500 p-4">Total Tasks: {tasks.length}</div>
        <div className="border border-emerald-500 p-4">Completed: {tasks.filter(t => t.status === 'Completed').length}</div>
        <div className="border border-emerald-500 p-4">Pending: {tasks.filter(t => t.status === 'Pending').length}</div>
      </div>

      <table className="w-full border-collapse border border-emerald-500">
        <thead>
          <tr>
            <th className="border border-emerald-500 p-2">ID</th>
            <th className="border border-emerald-500 p-2">Title</th>
            <th className="border border-emerald-500 p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td className="border border-emerald-500 p-2">{task.id}</td>
              <td className="border border-emerald-500 p-2">{task.title}</td>
              <td className="border border-emerald-500 p-2">{task.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
