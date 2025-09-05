"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function ClientPortal({
  children,
  selector = "#portal-root", // default target
}: {
  children: React.ReactNode;
  selector?: string;
}) {
  const [target, setTarget] = useState<Element | null>(null);

  useEffect(() => {
    const el = document.querySelector(selector);
    if (el) setTarget(el);
  }, [selector]);

  if (!target) return null;
  return createPortal(children, target);
}
