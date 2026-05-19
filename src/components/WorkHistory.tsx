"use client";
import { timeline } from "@/constants/work-timeline";

export const WorkHistory = () => {
  return (
    <div className="mt-10">
      <div className="relative border-l-2 border-neutral-200 dark:border-neutral-700 pl-8 space-y-10">
        {timeline.map((item, index) => (
          <div key={`timeline-${index}`} className="relative">
            <span
              className={`absolute -left-[41px] top-1 w-4 h-4 rounded-full border-2 border-white dark:border-zinc-900 ${
                item.primary
                  ? "bg-zinc-900 dark:bg-white"
                  : "bg-neutral-300 dark:bg-neutral-600"
              }`}
            />
            <p className="text-xs text-neutral-400 mb-1">{item.date}</p>
            <p className="font-semibold text-zinc-900 dark:text-white">
              {item.title} · {item.company}
            </p>
            <p className="text-sm text-neutral-500 mb-2">{item.project}</p>
            <ul className="text-sm text-neutral-600 dark:text-neutral-400 space-y-1 list-disc list-inside">
              {item.responsibilities.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
            {item.note && (
              <p className="text-xs text-neutral-400 mt-2 italic">{item.note}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
