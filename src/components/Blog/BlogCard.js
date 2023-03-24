import React, { useState, useEffect, useRef } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { navigate } from "gatsby";
import styled from "styled-components";

import { FaAngleDoubleRight } from "react-icons/fa";

const BlogCard = ({ className, work }) => {
  const [width, setWidth] = useState(0);
  const [height, setHieght] = useState(0);

  //za pracenje misa
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  //da se karta vrati u pocetni polozaj nakon mouseleave
  const [mouseLeaveDelay, setMuseLeaveDelay] = useState(0);

  //problem je sto se mouseleave aktivira nakon clicka, pa imamomo
  //memory leak, zato provjeravamo isClicked
  const [isClicked, setIsClicked] = useState(false);

  //transformaicja karte i bg on mousemuve
  const [cardTransform, setCardTransform] = useState(null);
  const [bgTransform, setBgTransform] = useState(null);

  const card = useRef(null);

  const { slug, title, snipet, heroImage } = work;
  let mainImage = getImage(heroImage);

  useEffect(() => {
    setWidth(card.current.offsetWidth);
    setHieght(card.current.offsetHeight);
  }, []);

  useEffect(() => {
    const rX = (mouseX / width) * 30;
    const rY = (mouseY / height) * -30;
    const cardTrans = {
      transform: `rotateY(${rX}deg) rotateX(${rY}deg)`,
      cursor: `pointer`,
    };

    const tX = (mouseX / width) * -40;
    const tY = (mouseY / height) * -40;
    const bgTrans = {
      transform: `translateX(${tX}px) translateY(${tY}px)`,
    };

    setCardTransform(cardTrans);
    setBgTransform(bgTrans);
  }, [mouseX, width, mouseY, height]);

  const handleMouseMove = (e) => {
    setMouseX(e.pageX - card.current.offsetLeft - width / 2);
    setMouseY(e.pageY - card.current.offsetTop - height / 2);
  };
  const handleMouseEnter = () => {
    if (isClicked) {
      setIsClicked(false);
    }
    setMuseLeaveDelay(clearTimeout(mouseLeaveDelay));
  };
  const handleMouseLeave = () => {
    if (!isClicked) {
      setMuseLeaveDelay(
        setTimeout(() => {
          setMouseX(0);
          setMouseY(0);
        }, 1000)
      );
    }
  };

  const handleCardClick = () => {
    setIsClicked(true);
    navigate(`/blog/${slug}`);
  };

  //detektuj touch screan capacity
  function isTouchScreendevice() {
    return "ontouchstart" in window || navigator.maxTouchPoints;
  }

  return (
    <div
      className={className}
      onMouseMove={isTouchScreendevice() ? null : handleMouseMove}
      onMouseEnter={isTouchScreendevice() ? null : handleMouseEnter}
      onMouseLeave={isTouchScreendevice() ? null : handleMouseLeave}
      onMouseUp={isTouchScreendevice() ? null : handleCardClick}
      ref={card}
      role="button"
      tabIndex="0"
    >
      <div className="card" style={cardTransform}>
        <GatsbyImage
          className="card-bg"
          style={bgTransform}
          image={mainImage}
          alt="blog posts"
        ></GatsbyImage>

        <div className="card-info">
          <h1 className="title">{title}</h1>

          <p className="content" onTouchStart={handleCardClick}>
            {snipet}
            <FaAngleDoubleRight className="arrow"></FaAngleDoubleRight>
          </p>
        </div>
      </div>
    </div>
  );
};

export default styled(BlogCard)`
  cursor: pointer;
  margin: 10px;
  -webkit-transform: perspective(800px);
  transform: perspective(800px);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;

  /*JA DODAO*/
  outline: none;
  padding: 0;
  border: 0;

  .card {
    position: relative;
    /*flex: 0 0 240px;*/
    width: 240px;
    height: 320px;
    background-color: #333;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px,
      inset rgba(255, 255, 255, 1) 0 0 0 6px;
    transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }

  &:hover .card {
    transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1),
      box-shadow 2s cubic-bezier(0.23, 1, 0.32, 1);
    box-shadow: rgba(255, 255, 255, 0.2) 0 0 40px 5px,
      rgba(255, 255, 255, 1) 0 0 0 1px, rgba(0, 0, 0, 0.66) 0 30px 60px 0,
      inset #333 0 0 0 5px, inset white 0 0 0 6px;
  }

  .card-bg {
    /*MOJ DODDATAK*/
    box-sizing: content-box;
    /*----*/
    opacity: 0.5;
    position: absolute;
    top: -20px;
    left: -20px;
    width: 100%;
    height: 100%;
    padding: 20px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95),
      opacity 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    pointer-events: none;
  }

  &:hover .card-bg {
    transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1),
      opacity 5s cubic-bezier(0.23, 1, 0.32, 1);
    opacity: 0.8;
  }

  .card-info {
    padding: 20px;
    position: absolute;
    bottom: 0;
    /*JA DODAO*/
    left: 0;
    right: 0;
    margin: 0;
    border: 0;
    /*---*/
    color: #fff;
    transform: translateY(60%);
    transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
    .title {
      font-family: var(--titleFontFamily);
      font-size: 1.6rem;
      line-height: 2.5rem;
      font-weight: 700;
      letter-spacing: 3px;
      text-shadow: rgba(0, 0, 0, 0.5) 0 10px 10px;
      /*margin-bottom: 1em;*/
    }
    .content {
      font-family: var(--textFontFamily);
      font-size: 1rem;
      line-height: 1.5rem;
      letter-spacing: 1px;
      text-shadow: rgba(0, 0, 0, 1) 0 2px 3px;
      opacity: 0;
      margin-bottom: 0;
      transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    .arrow {
      transform: translate(4px, 5px);
      font-size: 1.4rem;
    }
    * {
      position: relative;
      z-index: 1;
    }
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        to bottom,
        transparent 0%,
        rgba(0, 0, 0, 0.6) 100%
      );
      background-blend-mode: overlay;
      opacity: 0;
      transform: translateY(100%);
      transition: 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    }
  }

  &:hover .card-info {
    transform: translateY(0);
  }
  &:hover .card-info .content {
    opacity: 1;
  }
  &:hover .card-info,
  &:hover .card-info .content {
    transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  &:hover .card-info:after {
    opacity: 1;
    transform: translateY(0);
    transition: 5s cubic-bezier(0.23, 1, 0.32, 1);
  }
  @media screen and (min-width: 1200px) {
    .card {
      width: 290px;
      height: 370px;
      .title {
        font-size: 2rem;
      }
    }
  }
`;
