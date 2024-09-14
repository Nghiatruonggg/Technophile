import React from "react";
import { Link } from "react-router-dom";

const AdminPagination = ({ totalPages, currentPage, setCurrentPage }) => {
  let pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }


  return (
    <>
      <div className="admin-pagination">
        <ul class="pagination">
          <li class="page-item">
            <button onClick={() => setCurrentPage(currentPage - 1)} className={currentPage == 1 ? "page-link disabled" : "page-link"} aria-label="Previous" >
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>
          {pageNumbers.map((page) => {
            return (
              <li class="page-item">
                <button onClick={() => setCurrentPage(page)} className={currentPage == page ? "page-link active" : "page-link"} >
                  {page}
                </button>
              </li>
            );
          })}
          <li class="page-item">
            <button onClick={() => setCurrentPage(currentPage + 1)} className={currentPage == totalPages ? "page-link disabled" : "page-link"} aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AdminPagination;
