import React from "react";

const Pagination = ({ totalProducts, productPerPage, setCurrentPage }) => {
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productPerPage); i++) {
    pages.push(i);
  }

  return (
    <>
      <div className="pagination" style={{ justifyContent: "center" }}>
        <div className="btn-group" role="group">
          {pages.map((page) => {
            return <button onClick={() => setCurrentPage(page)} key={page} type="button" className="btn btn-primary">
                {page}
            </button>;
          })}
        </div>
      </div>
    </>
  );
};

export default Pagination;
