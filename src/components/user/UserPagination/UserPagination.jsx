import React from "react";
import styles from "../UserPagination/UserPagination.module.css";
import { Button } from "react-bootstrap";

const UserPagination = ({
  currentPage,
  setCurrentPage,
  totalProduct,
  productPerPage,
}) => {
  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProduct / productPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className={styles.paginationWrap}>
        <div className={styles.pagination}>
          {pageNumbers.map((page) => {
            return (
              <Button
                variant="primary"
                key={page}
                onClick={() => setCurrentPage(page)}
                className={currentPage == page ? `${styles.active} ${styles.paginationButton}` : `${styles.paginationButton}`}
              >
                {page}
              </Button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default UserPagination;
