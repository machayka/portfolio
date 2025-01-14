import React from "react";
import { Toaster } from "./ui/sonner";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={`max-w-4xl w-full mx-auto py-20 px-4 md:px-10`}>
      {children}
      <Toaster />
    </main>
  );
};
