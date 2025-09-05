"use client";

import Portal from "../Portal/FormPortal";
import UserForm from "../Form/FilterForm";
import { FilterInput } from "@/lib/schemas/login";
import styles from "./UserFormPortal.module.scss";

export default function UserFormPortal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;

  const handleSubmit = (data: FilterInput) => {
    console.log("Form data:", data);
    onClose();
  };

  return (
    <Portal targetId="form-root">
      <div className={styles.overlay}>
        <div className={styles.modal}>
          <h2 className={styles.title}>Create User</h2>
          <UserForm onSubmit={handleSubmit} onCancel={onClose} />
        </div>
      </div>
    </Portal>
  );
}
