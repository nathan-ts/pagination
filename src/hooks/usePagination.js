export const DOTS = "...";

function usePagination({
  currentPage,
  totalCount,
  pageSize,
  lastPage
}) {
  const pages = Math.ceil(totalCount / pageSize);
  console.log(`There are ${pages} pages based on ${totalCount} posts and ${pageSize} page size`);
  // console.log(`First page is ${firstPage} and last page is ${lastPage}`)
  
  // If pages are 3 or under
  if (pages === 1) {
    return [1];
  } else if (pages === 2) {
    return [1, 2];
  } else if (pages === 3) {
    return [1, 2, 3];
  }
  const pagination = [];
  // If first page
  if (currentPage === 1) {
    
  }
  
  // If last page
  if (lastPage) {}

  // If neither
  return [1, 2, 3, DOTS, 5];
}

export default usePagination;
