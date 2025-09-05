import styles from "./SidebarItem.module.scss";
import type { SidebarItemProps } from "@/type/types";
import Link from "next/link";

const SidebarItem = ({ icon, label, href }: SidebarItemProps) => {
  return (
    <Link href={href} className={styles.item}>
      <span className={styles.icon}>{icon}</span>
      <p className={styles.label}>{label}</p>
    </Link>
  );
};

export default SidebarItem;
