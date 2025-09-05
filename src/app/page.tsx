"use client";
import { useState } from "react";
import styles from "./page.module.scss";
import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function Home() {
  const [page, SetPage] = useState("user");
  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <Sidebar />
      </aside>

      {/* Main content area */}
      <div className={styles.main}>
        {/* Header */}
        <header className={styles.header}>
          <Header />
        </header>

        {/* Page content */}
        <main className={styles.content}>{page === "user" && <p>user</p>}</main>
      </div>
    </div>
  );
}
