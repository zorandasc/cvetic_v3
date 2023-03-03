import React from "react";
import { graphql } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { renderRichText } from "gatsby-source-contentful/rich-text";

import * as styles from "../css/templateBlog.module.css";
import { Seo, StayledHero, ScrollButton, RichImage } from "../components";

const BlogTemplate = ({ data }) => {
  const { title, heroImage, text } = data.post;

  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const { gatsbyImageData, title } = node.data.target;
        if (!gatsbyImageData) {
          // asset is not an image
          return null;
        }
        return <RichImage img={gatsbyImageData} title={title}></RichImage>;
      },
    },
  };

  return (
    <>
      <StayledHero img={heroImage}></StayledHero>
      <section id="header" className={styles.template}>
        <ScrollButton></ScrollButton>
        <div className={styles.center}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.underline}></div>
          <div className={styles.info}>
            <i>
              <p className={styles.publish}>Created by: Lidija</p>
            </i>
          </div>
          <article className={styles.desc}>
            {renderRichText(text, options)}
          </article>
          <AniLink fade to="/blog" className="btn-primary">
            svi postovi
          </AniLink>
        </div>
      </section>
    </>
  );
};

export default BlogTemplate;

export const Head = ({ data }) => <Seo title={data.post.title} />;

export const query = graphql`
  query getPost($slug: String!) {
    post: contentfulBlog(slug: { eq: $slug }) {
      title
      heroImage {
        gatsbyImageData(
          layout: CONSTRAINED
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
      text {
        raw
        references {
          __typename
          gatsbyImageData
          contentful_id
          title
        }
      }
    }
  }
`;
