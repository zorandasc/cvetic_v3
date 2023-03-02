import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Title from "../Title";
import BlogCard from "./BlogCard";

const BlogList = ({ data }) => {
  const [sortedBlogs, setSortedBlogs] = useState([]);

  useEffect(() => {
    setSortedBlogs(data.blogCategories.edges);
  }, [data.blogCategories.edges]);

  return (
    <CategoryWrapper>
      <Title title="blog" subtitle="postovi"></Title>
      <div className="center">
        {sortedBlogs.map(({ node }) => {
          return <BlogCard key={node.contentful_id} work={node}></BlogCard>;
        })}
      </div>
    </CategoryWrapper>
  );
};

const CategoryWrapper = styled.section`
  padding: 1rem 0 4rem 0;
  text-align: center;
  background-color: var(--mainWhite);

  .center {
    padding: 0 80px 40px 80px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  @media screen and (min-width: 576px) {
    padding: 4rem 0;
  }
`;

export default BlogList;
