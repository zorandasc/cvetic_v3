import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

import { Seo, StayledHero, Title } from "../components";
import socialIcons from "../constants/socialIcons";
import ContactForm from "../components/Contact/ContacForm";

export const query = graphql`
  query {
    connectBcg: file(relativePath: { eq: "wedding12.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`;

const Contact = ({ data }) => {
  /*
  function sendPushNotificationHandler() {
    console.log("CLICKED");
    fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: "ExponentPushToken[mTxhvpPbcVLupvhbZKgqYJ]",
        title: "Nova poruka od Svadbenog Cveta.",
        body: "Od: Alija Alagic, alija@email.com",
        data: {
          name: "Pero Peric",
          email: "pero@email.com",
          message: "ajde bre",
          date: new Date().toLocaleString(),
          id: Date.now().toString(),
        },
      }),
    });
  }

*/
  return (
    <>
      <StayledHero img={data.connectBcg}></StayledHero>
      <SectionWrapper>
        <Title title="kontaktirajte" subtitle="nas"></Title>
        <div className="center">
          <div className="icons">
            {socialIcons.map((item, index) => {
              return (
                <div key={index} className="iconContainer">
                  <a
                    href={item.url}
                    //item.label odnosi se na globalni style za primjenu box-shadowa za svaku ikonu posebno na a link
                    className={`socialItem ${item.label}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="socials links"
                  >
                    {item.icon}
                  </a>
                </div>
              );
            })}
          </div>
          <ContactForm className="form"></ContactForm>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Contact;

export const Head = () => <Seo title="Kontakt" />;

const SectionWrapper = styled.section`
  padding: 1rem 0 4rem 0;
  background-color: var(--mainWhite);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .center {
    width: 90vw;
    margin: 0 auto;
  }
  /*
  .form {
    background-color: #333;
    color: whitesmoke;
    padding: 1rem;
    box-shadow: var(--box-shadow);
    border-radius: 10px;
  }
*/
  .icons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 3rem;
  }

  .iconContainer {
    display: grid;
    align-items: center;
    justify-items: center;
  }

  .socialItem {
    display: inline-flex;
    width: 60px;
    height: 60px;
    margin: 20px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    color: #fff;
    position: relative;
    font-size: 21px;
    flex-shrink: 0;
    transition: var(--mainTransition);
  }

  .socialItem:hover {
    transform: scale(1.2);
  }

  //this is for desktop
  @media screen and (min-width: 992px) {
    padding: 4rem 0;

    .center {
      width: 50vw;
      margin: 0 auto;
    }

    .icons {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
`;
