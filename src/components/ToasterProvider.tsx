// app/components/ToasterProvider.tsx
"use client"; // important

import { Toaster } from "react-hot-toast";

export default function ToasterProvider() {
  return (
    <Toaster
      toastOptions={{
        style: {
          background: "rgba(255, 255, 255, 0.5)",
          color: "#213F7D", // text color
          fontWeight: "400",
          zIndex: 1000,
        },
      }}
      position="top-right"
    />
  );
}
