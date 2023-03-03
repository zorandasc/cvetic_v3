import "@reach/dialog/styles.css";
import React, { useState } from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Dialog } from "@reach/dialog";
import { renderRichText } from "gatsby-source-contentful/rich-text";

import * as styles from "../css/templateWork.module.css";
import { Seo, StayledHero, Title, ScrollButton } from "../components";

const CustomDialog = styled(Dialog)`
  button {
    border: none;
    outline: none;
    margin-top: 1rem;
    background: var(--primaryColor);
    color: var(--mainBlack);
    transition: var(--mainTransition);
  }
  button:hover {
    background: var(--mainBlack);
    color: var(--primaryColor);
  }
`;

const WorkTemplate = ({ data }) => {
  const [{ showLightbox, currentImage }, setLightbox] = useState({
    showLightbox: false,
    currentImage: null,
  });

  const { prefiks, category, main, opis, images } = data.work;
  const [mainImage, ...workImages] = images;

  return (
    <>
      <StayledHero img={mainImage}></StayledHero>
      <section className={styles.template}>
        <Title title={prefiks} subtitle={category}></Title>

        <header id="header" className={styles.header}>
          <ScrollButton></ScrollButton>
          <h2 className={styles.ribbon}>
            <span className={styles.ribbonContent}>{category}</span>
          </h2>
          <div className={styles.underpage}>{renderRichText(opis)}</div>
        </header>

        <div className={styles.center}>
          <div className={styles.images}>
            {workImages.map((item, index) => {
              return (
                <div
                  key={index}
                  className={styles.previewButton}
                  onClick={() =>
                    setLightbox({
                      showLightbox: true,
                      currentImage: item,
                    })
                  }
                  onKeyDown={() =>
                    setLightbox({
                      showLightbox: true,
                      currentImage: item,
                    })
                  }
                  role="button"
                  tabIndex="0"
                >
                  <GatsbyImage
                    image={getImage(item)}
                    alt="svadbeni artikal"
                    className={styles.image}
                  ></GatsbyImage>
                  <h6 className={styles.broj}>{`${main}${index}`}</h6>
                </div>
              );
            })}
          </div>
          {showLightbox && (
            <CustomDialog>
              <GatsbyImage
                alt="svadbeni artikal"
                image={getImage(currentImage)}
              />
              <button
                type="button"
                className="btn-primary"
                onClick={() =>
                  setLightbox({
                    showLightbox: false,
                    currentImage: null,
                  })
                }
              >
                Zatvori
              </button>
            </CustomDialog>
          )}
        </div>
      </section>
    </>
  );
};

export default WorkTemplate;

export const Head = ({ data }) => (
  <Seo title={`${data.work.prefiks} ${data.work.category}`} />
);

export const query = graphql`
  query ($slug: String!) {
    work: contentfulWork(slug: { eq: $slug }) {
      prefiks
      category
      main
      images {
        gatsbyImageData(
          layout: CONSTRAINED
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
      opis {
        raw
      }
    }
  }
`;
