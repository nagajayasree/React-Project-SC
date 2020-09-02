import React from "react";
import _ from "lodash";

const AddPagination = (props) => {
  const { postsCount, pageSize, currentPage, onPageChange } = props;

  const pagesCount = Math.ceil(postsCount / pageSize);
  if (pagesCount === 1) return null;

  const pages = _.range(1, pagesCount + 1);

  return (
    <>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            className={page === currentPage ? "page-item active" : "page-item"}
            key={page}
          >
            <a className="page-link">{page}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AddPagination;
