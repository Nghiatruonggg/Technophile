import React from "react";

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  let pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="pagination" style={{ justifyContent: "center" }}>
        <div className="btn-group" role="group">
          {pageNumbers.map((page) => (
            <button key={page} type="button" className={currentPage === page ? "active btn btn-primary" : "btn btn-primary"} onClick={() => setCurrentPage(page)}>
              {page}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Pagination;
