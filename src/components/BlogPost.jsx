import "../css/blogs.scss";

import PropTypes from "prop-types";
import React from "react";

function BlogPost({ id, author, title, excerpt }) {
  return (
    <li className="blogsWrapper">
      <div className="blog">
        <div className="imageWrapper">
          <img
            className="authorImage"
            src={`https://joeschmoe.io/api/v1/${author}`}
            alt="Author"
          />
          <p>{id}&nbsp;</p>
          <p variant="body">{author}</p>
        </div>

        <h2>{title}</h2>
        <p className="excerpt">{excerpt}</p>
      </div>
    </li>
  );
}

BlogPost.propTypes = {
  id: PropTypes.number,
  author: PropTypes.string,
  title: PropTypes.string,
  excerpt: PropTypes.string,
};

BlogPost.defaultProps = {
  id: 0,
  author: "",
  title: "",
  excerpt: "",
};

export default BlogPost;
