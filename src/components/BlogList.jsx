import BlogPost from "./BlogPost";
import Pagination from "./Pagination";
import React, { useState } from "react";
import blogs from "../data/blogs.json";

const PAGE_SIZES = [15, 25, 50, 100];

function BlogList() {
  // States
  const [currentPaginationData, setCurrentPaginationData] = useState(
    blogs.posts.slice(0, 15)
  );
  const [currentPageSize, setCurrentPageSize] = useState(PAGE_SIZES[0]);
  const [currentPage, setCurrentPage] = useState(1);

  // Events
  const updateRowsPerPage = (value) => {
    const rows = parseInt(value);
    setCurrentPageSize(rows);
    setCurrentPage(1);
    setCurrentPaginationData(blogs.posts.slice(0, rows));
  };
  const updatePage = (pageNumber) => {
    setCurrentPage(pageNumber);
    setCurrentPaginationData(
      blogs.posts.slice(
        (pageNumber - 1) * currentPageSize,
        pageNumber * currentPageSize
      )
    );
  };

  // JSX
  return (
    <div>
      <Pagination
        currentPage={currentPage}
        totalCount={blogs.posts.length}
        pageSize={currentPageSize}
        pageSizeOptions={PAGE_SIZES}
        onPageChange={updatePage}
        onPageSizeOptionChange={updateRowsPerPage}
      />
      <ul
        // Do not modify the aria-label below, it is used for Hatchways automation.
        aria-label="blog list"
      >
        {currentPaginationData.map((blog) => (
          <BlogPost
            key={blog.id}
            author={blog.author}
            title={blog.title}
            excerpt={blog.excerpt}
            featureImage={blog.image}
          />
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
