import React from "react";

export default function PendingTasks({ pendingTasks }) {
  return (
    <span className="rounded-full bg-slate-200 px-2 py-1 text-xs font-semibold text-slate-700">
      <span className="font-extrabold">{pendingTasks}</span> Pending tasks
    </span>
  );
}
