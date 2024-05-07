"use client";

import { ReactNode } from "react";

interface AdminProps {
  children: ReactNode;
  appName: string;
}

export const Admin = ({ appName, children }: AdminProps) => {
  return (
    <div>
      <h1>Hello from your {appName} app!</h1>
      <p>
        This is a shared component that can be used by any app in the monorepo.
      </p>
      {children}
    </div>
  );
};
