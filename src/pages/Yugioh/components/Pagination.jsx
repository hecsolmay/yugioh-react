import React from "react";
import { useSearchParams } from "react-router-dom";

const Pagination = ({ info }) => {
  const { current_rows, total_rows, total_pages } = info;
  const pages = getPagination(current_rows, total_rows, total_pages);

  const [params, setParams] = useSearchParams();

  const handleNext = () => {
    params.set("offset", info.next_page_offset);
    setParams(params);
  };

  const handlePrev = () => {
    params.set("offset", info.previous_page_offset);
    setParams(params);
  };

  console.log(pages);

  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex -space-x-px">
        {info.previous_page_offset ? (
          <li>
            <button
              onClick={handlePrev}
              className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Previous
            </button>
          </li>
        ) : null}
        {info.next_page_offset ? (
          <li>
            <button
              onClick={handleNext}
              className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Pagination;

function getPagination(currentRows, totalRows, totalPages) {
  const maxPages = 6;
  const currentOffset = currentRows - 1;
  const totalOffset = totalRows - 1;
  const currentPage = Math.floor(currentOffset / maxPages) + 1;
  const lastPageOffset = totalOffset % maxPages;
  const lastPage = totalPages - Math.floor(lastPageOffset / maxPages);
  let pagination = [];

  if (totalPages <= maxPages) {
    pagination = Array.from({ length: totalPages }, (_, i) => i + 1);
  } else if (currentPage <= maxPages - 3) {
    pagination = Array.from({ length: maxPages }, (_, i) => i + 1);
  } else if (currentPage >= lastPage - 3) {
    pagination = Array.from(
      { length: maxPages },
      (_, i) => lastPage - maxPages + i + 1
    );
  } else {
    pagination = Array.from({ length: 5 }, (_, i) => currentPage - 2 + i);
    pagination.unshift(1);
    pagination.push(totalPages);
  }

  return pagination;
}
