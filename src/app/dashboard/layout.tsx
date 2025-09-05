"use client";
import styles from "./dashboard.module.scss";
import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <Sidebar />
      </aside>

      {/* Main area */}
      <div className={styles.main}>
        <header className={styles.header}>
          <Header />
        </header>

        <main className={styles.content}>{children}</main>
      </div>
    </div>
  );
}
