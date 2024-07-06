import React, { useState } from 'react'

const User_Pagination = ({ totalItems, itemsPerPage, children }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(totalItems / itemsPerPage);
  
    const goToPage = (page) => {
      if (page >= 1 && page <= totalPages) {
        setCurrentPage(page);
      }
    };
  
    return children({ currentPage, totalPages, goToPage });
}

export default User_Pagination
