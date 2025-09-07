"use client"
import React, { useState } from "react";
import UserCard from "@/components/UserCards/Card";
import UserTable from "@/components/Table/Table";
import styles from "./users.module.scss";
import { userCardList } from "./UsersList";
import users from "@/data/users.json";
import PaginationBar from "@/components/Pagination";

const UserPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = users.slice(indexOfFirstItem, indexOfLastItem);

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
        <UserTable users={currentUsers} loading={false} />
      </div>
      <div>
        <PaginationBar totalItems={users.length} itemsPerPage={itemsPerPage} onPageChange={setCurrentPage} onItemsPerPageChange={setItemsPerPage} currentPage={currentPage} />
      </div>
    </div>
  );
};

export default UserPage;
