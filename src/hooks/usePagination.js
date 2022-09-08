export const DOTS = "...";

function usePagination({ currentPage, totalCount, pageSize }) {
  // Calculate total pages
  const totalPages = Math.ceil(totalCount / pageSize);

  // If pages are <3
  if (totalPages === 1) {
    return [1];
  } else if (totalPages === 2) {
    return [1, 2];
  } else if (totalPages === 3) {
    return [1, 2, 3];
  }

  let pagination = [];
  // If first 2 pages
  if (currentPage <= 2) {
    pagination = [1, 2, 3, DOTS, totalPages];
  }

  // If last 2 pages
  else if (totalPages - currentPage <= 1) {
    pagination = [1, DOTS, totalPages - 2, totalPages - 1, totalPages];
  }
  // If neither first nor last page, and total pages >3
  else {
    pagination = [
      1,
      DOTS,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      DOTS,
      totalPages,
    ];
  }
  return pagination;
}

export default usePagination;
