"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema, FilterInput } from "@/lib/schemas/login";
import styles from "./FilterForm.module.scss";
import { UserFormProps } from "@/type/types";

export default function UserForm({ onSubmit, onCancel }: UserFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FilterInput>({
    resolver: zodResolver(userSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      {/* Organization */}
      <div className={styles.field}>
        <label>Organization</label>
        <select {...register("organization")}>
          <option value="">Select...</option>
          <option value="org1">OrgA</option>
          <option value="org2">OrgB</option>
          <option value="org3">OrgC</option>
        </select>
        {errors.organization && <p className={styles.error}>{errors.organization.message}</p>}
      </div>

      {/* Username */}
      <div className={styles.field}>
        <label>Username</label>
        <input {...register("username")} />
        {errors.username && <p className={styles.error}>{errors.username.message}</p>}
      </div>

      {/* Email */}
      <div className={styles.field}>
        <label>Email</label>
        <input type="email" {...register("email")} />
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
      </div>

      {/* Date */}
      <div className={styles.field}>
        <label>Date</label>
        <input type="date" {...register("date")} />
        {errors.date && <p className={styles.error}>{errors.date.message}</p>}
      </div>

      {/* Phone Number */}
      <div className={styles.field}>
        <label>Phone Number</label>
        <input {...register("phoneNumber")} />
        {errors.phoneNumber && <p className={styles.error}>{errors.phoneNumber.message}</p>}
      </div>

      {/* Status */}
      <div className={styles.field}>
        <label>Status</label>
        <select {...register("status")}>
          <option value="">Select...</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          <option value="Pending">Pending</option>
        </select>
        {errors.status && <p className={styles.error}>{errors.status.message}</p>}
      </div>

      {/* Actions */}
      <div className={styles.actions}>
        <button type="button" onClick={onCancel} className={styles.cancel}>
          Cancel
        </button>
        <button type="submit" className={styles.save}>
          Save
        </button>
      </div>
    </form>
  );
}
