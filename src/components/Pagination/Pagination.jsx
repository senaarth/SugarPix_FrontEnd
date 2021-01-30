import React from 'react';
import './Pagination.css'

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li onClick={() => paginate(number)} href='!#' key={number} className={currentPage === number ? 'page-item actual-page' : 'page-item'}>
              {number}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;