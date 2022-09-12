import "../css/pagination.scss";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import usePagination, { DOTS } from "../hooks/usePagination";

import PropTypes from "prop-types";
import { useMemo } from "react";

function Pagination({
  onPageChange,
  onPageSizeOptionChange,
  totalCount,
  currentPage,
  pageSize,
  pageSizeOptions,
}) {
  // Set first and last page booleans for ease of calculation
  const firstPage = currentPage <= 1;
  const lastPage = currentPage * pageSize >= totalCount;

  const paginationRange = useMemo(() =>
    usePagination({
      currentPage,
      totalCount,
      pageSize
    }), [
      currentPage,
      totalCount,
      pageSize
    ]
  );

  const onNext = () => {
    // Only go to next page if not last page
    if (!lastPage) {
      onPageChange(currentPage + 1);
    }
  };

  const onPrevious = () => {
    // Only go to previous page if not first page
    if (!firstPage) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <ul
      className="wrapper"
      // Do not modify the aria-label below, it is used for Hatchways automation.
      aria-label="Blog post pagination list"
    >
      <li className="paginationItem">
        <button
          type="button"
          className="arrowButton left"
          // Do not modify the aria-label below, it is used for Hatchways automation.
          aria-label="Goto previous page"
          onClick={onPrevious}
          disabled={firstPage}
        >
          <ChevronLeftIcon />
        </button>
      </li>

      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return (
            <li key={pageNumber} className="dots">
              &#8230;
            </li>
          );
        }

        // Set current page for styling
        const inputProps = {
          "aria-current": currentPage === pageNumber ? "page" : "false",
        };
        return (
          <li key={pageNumber} className="paginationItem" {...inputProps}>
            <button
              type="button"
              // Do not modify the aria-label below, it is used for Hatchways automation.
              aria-label={`Goto page ${pageNumber}`}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          </li>
        );
      })}

      <li className="paginationItem">
        <button
          type="button"
          className="arrowButton right"
          // Do not modify the aria-label below, it is used for Hatchways automation.
          aria-label="Goto next page"
          onClick={onNext}
          disabled={lastPage}
        >
          <ChevronRightIcon />
        </button>
      </li>

      <select
        className="paginationSelector"
        // Do not modify the aria-label below, it is used for Hatchways automation.
        aria-label="Select page size"
        value={pageSize}
        onChange={(e) => {
          onPageSizeOptionChange(e.target.value);
        }}
      >
        {pageSizeOptions.map((size) => (
          <option key={size} defaultValue={pageSize === size} value={size}>
            {size} per page
          </option>
        ))}
      </select>
    </ul>
  );
}

Pagination.propTypes = {
  totalCount: PropTypes.number,
  currentPage: PropTypes.number,
  pageSize: PropTypes.number,
  pageSizeOptions: PropTypes.instanceOf(Array),
  onPageChange: PropTypes.func,
  onPageSizeOptionChange: PropTypes.func,
};

Pagination.defaultProps = {
  totalCount: 0,
  currentPage: 1,
  pageSize: 1,
  pageSizeOptions: [15, 25, 50, 100],
  onPageChange: () => {},
  onPageSizeOptionChange: () => {},
};

export default Pagination;
