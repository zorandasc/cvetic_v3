import * as React from "react";
import { Link } from "gatsby";
import Seo from "../components/Seo";

const pageStyles = {
  color: "whitesmoke",
  padding: "96px",
  marginTop: "3rem",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

const pageLink = {
  color: "#d2aa5c",
};

const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Stranica ne postoji!</h1>
      <p style={paragraphStyles}>
        Žao nam je 😔, nismo mogli naći to što tražite.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code style={codeStyles}>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/" style={pageLink}>
          Go home
        </Link>
      </p>
    </main>
  );
};

export default NotFoundPage;

export const Head = () => <Seo title="Not Found" />;
