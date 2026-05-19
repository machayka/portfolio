"use client";
import { timeline } from "@/constants/education-timeline";

export const EducationHistory = () => {
  return (
    <div className="mt-10">
      <div className="relative border-l-2 border-neutral-200 dark:border-neutral-700 pl-8 space-y-10">
        {timeline.map((item, index) => (
          <div key={`edu-${index}`} className="relative">
            <span className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-zinc-900 dark:bg-white border-2 border-white dark:border-zinc-900" />
            <p className="text-xs text-neutral-400 mb-1">{item.date}</p>
            <p className="font-semibold text-zinc-900 dark:text-white">{item.title}</p>
            <p className="text-sm text-neutral-500 mb-2">{item.company}</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2 italic">
              {item.description}
            </p>
            <ul className="text-sm text-neutral-600 dark:text-neutral-400 space-y-1 list-disc list-inside">
              {item.responsibilities.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
