import React from "react";
import styles from "../UserPagination/UserPagination.module.css";

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
          <div className="btn-group" role="group">
            {pageNumbers.map((page) => {
              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={
                    currentPage == page
                      ? `btn btn-primary ${styles.active}`
                      : "btn btn-primary"
                  }
                >
                  {page}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPagination;
