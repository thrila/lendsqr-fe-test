import styles from "./page.module.scss";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className={styles.landing}>
      <h1 className={styles.title}>Dashboard</h1>
      <p className={styles.subtitle}>
        Welcome to your the Root folder. Go to get{" "}
        <Link href={"dashboard/users"}>
          {" "}
          <span className={styles.link}>started</span>
        </Link>{" "}
        .
      </p>
    </div>
  );
}
