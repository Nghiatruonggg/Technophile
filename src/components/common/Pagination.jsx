import React from "react";

const Pagination = ({
  currentPage,
  setCurrentPage,
  totalPage,
  productPerPage,
}) => {
  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPage / productPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="pagination" style={{ justifyContent: "center" }}>
        <div className="btn-group" role="group">
          {pageNumbers.map((page) => {
            return <button key={page} onClick={() => setCurrentPage(page)} className={currentPage == page ? "btn btn-primary active" : "btn btn-primary"}>{page}</button>
          })}
        </div>
      </div>
    </>
  );
};

export default Pagination;
