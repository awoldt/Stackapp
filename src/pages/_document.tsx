import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <footer>
          <div className="footer-container">
            <div className="hr-container">
              <hr />
            </div>
            <p>
              <span className="footer-right">
                <a href={"/about"} className="footer-element">
                  About
                </a>
                <a href={"/privacy"} className="footer-element">
                  Privacy
                </a>
                <a href={"/team"} className="footer-element">
                  Team
                </a>
                <br />
                <br />
              </span>
              <span className="footer-left">
                &copy;Stack App 2023. All Rights Reserved.
                <br />
                <br />
              </span>
            </p>
          </div>
        </footer>
      </body>
    </Html>
  );
}
