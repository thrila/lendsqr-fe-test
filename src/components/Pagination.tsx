"use client";
import styles from "./Pagination.module.scss";
import ChervonRight from "@/icons/chervon_right.svg";
import ChervonLeft from "@/icons/chervon_left.svg";

type Props = {
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (itemsPerPage: number) => void;
  currentPage: number;
};

export default function PaginationBar({
  totalItems,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange,
  currentPage,
}: Props) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Build list of pages to display with ellipsis
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 3; // how many numbers to show before ellipsis

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= maxVisible) {
        pages.push(1, 2, 3, "...", totalPages - 1, totalPages);
      } else if (currentPage >= totalPages - maxVisible + 1) {
        pages.push(1, 2, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
      }
    }
    return pages;
  };

  const pages = getPageNumbers();

  return (
    <div className={styles.paginationBar}>
      <div className={styles.info}>
        Showing
        <select
          value={itemsPerPage}
          onChange={(e) => {
            onItemsPerPageChange(Number(e.target.value));
            onPageChange(1);
          }}
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
        out of {totalItems}
      </div>

      <div className={styles.controls}>
        <button
          className={styles.navBtn}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChervonLeft />
        </button>

        {pages.map((p, idx) =>
          p === "..." ? (
            <span key={idx} className={styles.ellipsis}>
              …
            </span>
          ) : (
            <span
              key={idx}
              className={`${styles.pageNum} ${p === currentPage ? styles.active : ""}`}
              onClick={() => onPageChange(p as number)}
            >
              {p}
            </span>
          ),
        )}

        <button
          className={styles.navBtn}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <ChervonRight />
        </button>
      </div>
    </div>
  );
}
