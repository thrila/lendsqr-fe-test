import styles from "./activate-user.module.scss";
import Link from "next/link";
type Props = {
  params: { id: string };
};

export default function UserDetailsPage({ params }: Props) {
  return (
    <div className={styles.landing}>
      <h1 className={styles.title}>Activate User {params.id}</h1>
      <p className={styles.subtitle}>
        Welcome to your activate user. Go to /dashboard/user to get{" "}
        <Link href={"dashboard/users"}>
          {" "}
          <span className={styles.link}>started</span>
        </Link>{" "}
        .
      </p>
    </div>
  );
}
