import React from "react";
import User_Pagination from "./User_Pagination";
const data = Array.from({ length: 50 }, (_, index) => `Item ${index + 1}`);

const Pagination = () => {
    const itemsPerPage = 10;

  return (
    <div>
      <h1>Pagination Example</h1>
      <User_Pagination totalItems={data.length} itemsPerPage={itemsPerPage}>
      {({ currentPage, totalPages, goToPage }) => {
          const startIndex = (currentPage - 1) * itemsPerPage;
          const currentData = data.slice(startIndex, startIndex + itemsPerPage);

          return (
            <div>
              <ul>
                {currentData.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div>
                <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
                  Previous
                </button>
                <span> Page {currentPage} of {totalPages} </span>
                <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
                  Next
                </button>
              </div>
            </div>
          );
        }}
      </User_Pagination>
    </div>
  );
};

export default Pagination;
