import { Pagination } from "react-bootstrap";
import styles from "./AdminPagination.module.css";

const AdminPagination = ({ totalPages, currentPage, setCurrentPage }) => {
  let pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className={styles.adminPagination}>
        <Pagination>
          <Pagination.Prev
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          />
          {pageNumbers.map((page) => (
            <Pagination.Item
              key={page}
              active={currentPage === page}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </Pagination.Item>
          ))}
          <Pagination.Next
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages || totalPages === 0}
          />
        </Pagination>
      </div>
    </>
  );
};

export default AdminPagination;
