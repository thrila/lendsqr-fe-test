import styles from "./UserCard.module.scss";
import { UserCardProps } from "@/type/types";

const UserCard = ({ icon, title, text }: UserCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>{icon}</div>
      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};

export default UserCard;
