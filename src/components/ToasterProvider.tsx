// app/components/ToasterProvider.tsx
"use client"; // important

import { Toaster } from "react-hot-toast";

export default function ToasterProvider() {
  return (
    <Toaster
      toastOptions={{
        style: {
          background: "rgba(57, 205, 204, 1)",
          color: "rgba(84, 95, 125, 1)", // text color
          fontWeight: "bold",
          zIndex: 1000,
        },
      }}
      position="top-right"
    />
  );
}
