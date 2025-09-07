import { MenuProps } from "@/type/types";
import styles from "./BubbleMenus.module.scss";
import Link from "next/link";

export default function BubbleMenu({ id, items, coords, visible, onSelect, onClose }: MenuProps) {
  if (!visible) return null;

  return (
    <ul
      className={styles.bubbleMenu}
      style={{
        position: "absolute",
        top: coords.top,
        left: coords.left,
      }}
    >
      {items.map((item) => (
        <Link key={item.href} href={`/dashboard/users/${item.href}/${id}`}>
          <li
            onClick={() => {
              onSelect(item.text);
              onClose(); // hide after click
            }}
          >
            <span>{item.icon}</span>
            <span>{item.text}</span>
          </li>
        </Link>
      ))}
    </ul>
  );
}
