export const DOTS = "...";

function usePagination({
  currentPage,
  totalCount,
  pageSize,
}) {
  /*
    Rewrite the logic here to map out the pagination to be displayed.
    
  */
  return [1, 2, 3, DOTS, 5];
}

export default usePagination;
