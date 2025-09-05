"use client";
import styles from "./UserTable.module.scss";
import FilterResultsIcon from "@/icons/filter-results-button.svg";
import OptionsIcon from "@/icons/options.svg";
import { UserTableProps, User } from "@/type/types";
import { useState } from "react";
import ClientPortal from "../Menu/Portal";
import BubbleMenu from "../Menu/BubbleMenu";
import { menuList } from "../Menu/BubbleList";
import UserFormPortal from "../FormPortal/UserFormPortal";

interface Props extends UserTableProps {
  loading?: boolean;
}

export default function UserTable({ users, loading = false }: Props) {
  const [openRow, setOpenRow] = useState<number | null>(null);
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState<{ top: number; left: number }>({ top: 0, left: 0 });
  const [formCoords, setFormCoords] = useState<{ top: number; left: number }>({ top: 0, left: 0 });
  const [menuVisible, setMenuVisible] = useState(false);
  const skeletonRows = Array.from({ length: 5 });

  const handleSelect = (item: string) => {
    console.log("Selected:", item);
    setMenuVisible(false);
    setOpenRow(null);
  };

  const handleOpen = (e: React.MouseEvent, idx: number) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setCoords({
      top: rect.bottom + window.scrollY + 6, // 6px gap
      left: rect.left + window.scrollX - 100, // adjust for bubble width
    });
    setOpenRow(idx);
    setMenuVisible(true); // <-- make menu visible
  };
  const handleFormClick = (e: React.MouseEvent) => {
    setFormCoords({ top: e.clientY, left: e.clientX });
  };

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>
            <div className={styles.thContent}>
              Organization
              <span onClick={() => setOpen(true)}>
                <FilterResultsIcon />
              </span>
            </div>
          </th>
          <th>
            <div className={styles.thContent}>
              Username <FilterResultsIcon />
            </div>
          </th>
          <th>
            <div className={styles.thContent}>
              Email <FilterResultsIcon />
            </div>
          </th>
          <th>
            <div className={styles.thContent}>
              Phone number <FilterResultsIcon />
            </div>
          </th>
          <th>
            <div className={styles.thContent}>
              Date joined <FilterResultsIcon />
            </div>
          </th>
          <th>
            <div className={styles.thContent}>
              Status <FilterResultsIcon />
            </div>
          </th>
          <th>
            <span>nbsp;</span>
          </th>{" "}
          {/* blank header cell for options column */}
        </tr>
      </thead>
      <tbody>
        {loading
          ? skeletonRows.map((_, idx) => (
              <tr key={idx}>
                <td>
                  <div className={styles.skeletonCell} />
                </td>
                <td>
                  <div className={styles.skeletonCell} />
                </td>
                <td>
                  <div className={styles.skeletonCell} />
                </td>
                <td>
                  <div className={styles.skeletonCell} />
                </td>
                <td>
                  <div className={styles.skeletonCell} />
                </td>
                <td>
                  <div className={styles.skeletonCell} />
                </td>
                <td>
                  <div className={styles.skeletonCell} />
                </td>{" "}
                {/* extra cell for options */}
              </tr>
            ))
          : users.map((user: User, idx) => (
              <tr key={idx}>
                <td>{user.organization}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.dateJoined}</td>
                <td>
                  <span
                    className={
                      user.status === "active"
                        ? styles.active
                        : user.status === "inactive"
                          ? styles.inactive
                          : user.status === "pending"
                            ? styles.pending
                            : user.status === "blacklisted"
                              ? styles.blacklisted
                              : ""
                    }
                  >
                    {user.status}
                  </span>
                </td>
                <td className={styles.optionsCell}>
                  <span onClick={(e) => handleOpen(e, idx)}>
                    <OptionsIcon />
                  </span>
                  {openRow === idx && (
                    <ClientPortal>
                      <BubbleMenu
                        items={menuList}
                        coords={coords}
                        visible={menuVisible}
                        onSelect={handleSelect}
                        onClose={() => {
                          setMenuVisible(false);
                          setOpenRow(null);
                        }}
                      />
                    </ClientPortal>
                  )}
                </td>
              </tr>
            ))}
      </tbody>
      <UserFormPortal open={open} onClose={() => setOpen(false)} coords={formCoords} />
    </table>
  );
}
