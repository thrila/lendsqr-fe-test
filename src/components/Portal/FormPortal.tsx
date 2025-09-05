"use client";

import { createPortal } from "react-dom";

export default function Portal({
  children,
  targetId,
}: {
  children: React.ReactNode;
  targetId: string;
}) {
  const container = typeof window !== "undefined" ? document.getElementById(targetId) : null;

  if (!container) return null;
  return createPortal(children, container);
}
