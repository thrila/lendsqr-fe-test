import { MenuProps } from "@/type/types";
import styles from "./BubbleMenus.module.scss";

export default function BubbleMenu({ items, coords, visible, onSelect, onClose }: MenuProps) {
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
        <li
          key={item.text}
          onClick={() => {
            onSelect(item.text);
            onClose(); // hide after click
          }}
        >
          <span>{item.icon}</span>
          <span>{item.text}</span>
        </li>
      ))}
    </ul>
  );
}
