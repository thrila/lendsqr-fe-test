"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import ToasterProvider from "@/components/ToasterProvider";
import { LoginInput as LoginData, loginSchema } from "@/lib/schemas/login";
import styles from "./login.module.scss"; // SCSS module
import LogoIcon from "@/icons/Union.svg";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginData) => {
    console.log("clicked");
    toast.success(`Email: ${data.email} Password: ${data.password}`);
  };

  return (
    <div className={styles.loginContainer}>
      <header className={styles.header}>
        <LogoIcon className={styles.headerIcon} />
        <h1>Lendsqr</h1>
      </header>
      <ToasterProvider />
      <div className={styles.banner}></div>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.message}>
          <h2>Welcome!</h2>
          <p>Enter details to login.</p>
        </div>

        {/* form container */}
        <div className={styles.formGroup}>
          <input id="email" type="email" {...register("email")} placeholder="Email" />
          {errors.email && <p className={styles.errorMessage}>{errors.email.message}</p>}
        </div>

        <div className={styles.formGroup}>
          <div className={styles.inputWrapper}>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              {...register("password")}
              placeholder="Password"
            />
            <span className={styles.toggleIcon} onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? "HIDE" : "SHOW"}
            </span>
          </div>
          {errors.password && <p className={styles.errorMessage}>{errors.password.message}</p>}
        </div>

        <Link href="/login">Go to Login</Link>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default LoginPage;
