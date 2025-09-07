import React from "react";
import UserCard from "@/components/UserCards/Card";
import UserTable from "@/components/Table/Table";
import styles from "./users.module.scss";
import { userCardList } from "./UsersList";
import users from "@/data/users.json";
import PaginationBar from "@/components/Pagination";

const UserPage = () => {
  return (
    <div className={styles.pageContainer}>
      <div>
        <h1 className={styles.header}>User</h1>
      </div>
      <div className={styles.cardsRow}>
        {userCardList.map((item) => (
          <UserCard key={item.title} icon={item.icon} title={item.title} text={item.text} />
        ))}
      </div>
      <div>
        <UserTable users={users.slice(0, 99)} loading={false} />
      </div>
      <div>
        <PaginationBar totalItems={users.length} />
      </div>
    </div>
  );
};

export default UserPage;
