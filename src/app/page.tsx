/* eslint-disable @next/next/no-img-element */

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stack - Modern Tech Stack Visualization",
  description:
    "Stack is a platform that empowers developers to create beautifully designed web pages showcasing the most important details of their tech stacks. Include things such as coding languages, databases, frameworks, and more.",
  alternates: {
    canonical: "https://stackapp.xyz",
  },
};

export default function Home() {
  return (
    <main>
      <section>
        <div className="background">
          <img
            src={"/imgs/background.avif"}
            alt="background design"
            className="background-image"
          ></img>
        </div>
        <div className="card-container">
          <div className="card-empty-home">
            <h1 className="splash">Stack</h1>
            <p className="subtitle" style={{ paddingBottom: "10px" }}>
              A Platform for Modern Tech Stack Visualization
            </p>
          </div>
        </div>

        <div className="card-container">
          <div className="card-registration">
            <div className="btn-container-landing">
              <a href={"/signin"} className="btn-landing">
                <img
                  src="/imgs/icons/signin.svg"
                  className="white-svg"
                  alt="signin logo"
                  width={15}
                  height={15}
                />{" "}
                Sign In
              </a>
            </div>
            <div className="btn-container-landing">
              <a href={"/signup"} className="btn-landing">
                <img
                  src="/imgs/icons/signup.svg"
                  className="white-svg"
                  alt="signup logo"
                  width={15}
                  height={15}
                />{" "}
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
