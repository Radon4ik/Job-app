// 'use strict';

// import React, { useState, useEffect } from 'react';

// const Pagination = ({ totalJobs }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [pages] = useState(10);
//   const lastIndex = currentPage * pages;
//   const startIndex = lastIndex - pages;
//   const current = totalJobs.slice(lastIndex, startIndex);
//   const pageNumber = [];

//   for (let i = 1; i <= Math.ceil(totalJobs / pages); i++) {
//     pageNumber.push(i);
//   }
//   return (
//     <div>
//       <ul className='className="pagination"'>
//         {pageNumber.map((num, i) => {
//           <li key={i}>{num}</li>;
//         })}
//       </ul>
//     </div>
//   );
// };

// export default Pagination;
