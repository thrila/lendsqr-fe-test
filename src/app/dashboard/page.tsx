import styles from "./dashboard.module.scss";

export default function DashboardPage() {
  return (
    <div className={styles.landing}>
      <h1 className={styles.title}>Dashboard</h1>
      <p className={styles.subtitle}>
        Welcome to your dashboard. Select an option from the sidebar to get started.
      </p>
    </div>
  );
}
