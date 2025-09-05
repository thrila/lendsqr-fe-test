"use client";

import Portal from "../Portal/FormPortal";
import UserForm from "../Form/FilterForm";
import { FilterInput } from "@/lib/schemas/login";
import styles from "./UserFormPortal.module.scss";

export default function UserFormPortal({
  open,
  onClose,
  coords,
}: {
  open: boolean;
  onClose: () => void;
  coords: { top: number; left: number };
}) {
  if (!open) return null;

  const handleSubmit = (data: FilterInput) => {
    console.log("Form data:", data);
    onClose();
  };

  return (
    <Portal targetId="form-root">
      <div
        className={styles.overlay}
        style={{
          position: "absolute",
          top: coords.top + 70,
          left: coords.left + 300,
        }}
      >
        <div className={styles.modal}>
          <UserForm onSubmit={handleSubmit} onCancel={onClose} />
        </div>
      </div>
    </Portal>
  );
}
