/* eslint-disable @next/next/no-img-element */

import { Metadata } from "next";
import SideNav from "../components/CustomNav";
import { IsValidAccountCookie } from "@/functions";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Modern Tech Stack Visualization | Stack",
  description:
    "Stack offers developers a robust platform, enabling them to craft visually stunning web pages that highlight crucial details about their technological infrastructure. This includes information on coding languages, databases, frameworks, and various other components integral to their development environment.",
  alternates: {
    canonical: "https://stackapp.xyz",
  },
  openGraph: {
    type: "website",
    url: "https://stackapp.xyz",
    title: "Stack - Tech Stack Visualization",
    description:
      "Stack is a platform that empowers developers to create beautifully designed web pages showcasing the most important details of their tech stacks. Include things such as coding languages, databases, frameworks, and more.",
    siteName: "Stack",
    images: [
      {
        url: "https://stackapp.xyz/imgs/splash/image.png",
      },
    ],
  },
};

export default async function Home() {
  const cookieStore = cookies();
  const account = await IsValidAccountCookie(cookieStore.get("a_id"));

  return (
    <main>
      <section>
        <SideNav isSignedIn={account === false ? false : true} />
      </section>

      <section>
        <div className="card-container" id="landing">
          <div className="card-empty-splash">
            <h1 className="splash" id="splash">
              Visualize your Tech Stacks with Impact.
            </h1>
            <h4 style={{ textAlign: "center", marginTop: "2rem" }}>
              Stack&trade; is a platform designed to help developers and
              designers showcase their tech stacks.
            </h4>

            <div className="btn-container">
              <a href="/signup" className="btn-landing" style={{ textAlign: "center" }}>
                Start Stacking
              </a>
            </div>

            <h5 style={{ textAlign: "center", marginBottom: "14rem" }}>
              Scroll to Explore Stack&apos;s Features.
            </h5>

            <div className="btn-container" style={{ marginBottom: "2rem" }}>
              <span>
                <i className="fa-brands fa-github fa-2xl"></i> GitHub
                Integration
              </span>
              <span>
                <i className="fa-brands fa-square-js fa-2xl"></i> Built with
                Next.js
              </span>
              <span>
                <i className="fa-solid fa-server fa-2xl"></i> Built with MongoDB
              </span>
              <span style={{ marginBottom: "0rem" }}>
                <i className="fa-solid fa-shield fa-2xl"></i> Modern Security
                Standards
              </span>
            </div>

            <p
              style={{ textAlign: "center", opacity: ".65", fontSize: "14px" }}
            >
              Stack&trade; is built using state-of-the-art tools while adhering
              to the highest security standards. GitHub compatibility ensures
              seamless integration and collaboration for developers across the
              platform.
            </p>

            <div
              className="home-container"
              style={{ marginTop: "8rem", marginBottom: "4rem" }}
            >
              <div className="card">
                <h2>The Future of Tech Stack Presentation.</h2>
                <br />
                <p>
                  Step into a new era of showcasing the intricate web of
                  technologies that drive modern applications. Stack is your
                  gateway to a dynamic and innovative approach to tech stack
                  presentation. Say goodbye to dull, text-heavy descriptions,
                  and say hello to engaging, visual narratives that captivate
                  your audience. It&apos;s time to embrace the future, where
                  technology and design converge to make your tech stack
                  presentations more impactful than ever. Join us on this
                  exciting journey as we redefine the way you communicate your
                  tech stack&apos;s essence to the world.
                </p>
              </div>

              <div className="card">
                <h2>Unleash the Power Behind your Apps.</h2>
                <br />
                <p>
                  Dive into the heart of your application&apos;s inner workings
                  and witness the magic that powers it. Our platform is your key
                  to unveiling the hidden potential of your tech stack. From the
                  intricate databases to the responsive front-end libraries,
                  Stack allows you to visually showcase the building blocks of
                  your app like never before. It&apos;s time to transform your
                  tech stack into a compelling visual story, making it
                  accessible to all. Join us on a journey to explore, innovate,
                  and harness the true potential of your app&apos;s technology
                  with Stack.
                </p>
              </div>

              <div className="card">
                <h2>Your Custom Tech Stack Showcase.</h2>
                <br />
                <p>
                  Stack provides the ideal platform to present your tech stack
                  with style and finesse. It&apos;s your opportunity to tell the
                  world what makes your application stand out in the digital
                  landscape. With Stack, you can create a captivating visual
                  narrative of your app&apos;s core components, from powerful
                  databases to sleek frontend frameworks. Say goodbye to the
                  complexities of tech jargon and hello to a user-friendly and
                  engaging presentation of your tech stack. Your long-awaited
                  showcase is finally here – embrace it with Stack and let your
                  technology shine!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card-container" style={{ marginTop: "0rem" }}>
          <div
            className="card-empty"
            style={{ width: "100%", marginTop: "0rem", textAlign: "left" }}
          >
            <h2 style={{ textAlign: "center" }}>
              Showcase your Applications through Elegant Stacks.
            </h2>
            <div className="header-container" style={{ paddingTop: "2rem" }}>
              <div className="title-container-header">
                <div className="title-header">
                  <div className="header">
                    <img
                      src="imgs/splash/logo.png"
                      className="profile-img"
                      alt="stack-img"
                    />
                    <h1>Code Tracker</h1>
                    <h5>
                      <a style={{ padding: "10px", paddingLeft: "0" }}>
                        www.codetracker.com
                      </a>
                    </h5>
                    <div
                      className="profile-container"
                      style={{ marginTop: "10px;" }}
                    >
                      <img
                        src="imgs/splash/profile.PNG"
                        className="user-profile-img"
                        alt="user-profile-img"
                      />
                      <p>
                        <b>Test Developer</b>
                        <br />
                        @testdev
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="card-container"
                  style={{ paddingBottom: "0px" }}
                >
                  <div className="thumbnail">
                    <img src="imgs/splash/image.png" alt="stack-thumbnail" />
                  </div>
                </div>
              </div>
            </div>

            <div className="card-container">
              <div className="card">
                <p style={{ opacity: "0.4" }}>DESCRIPTION</p>
                <hr />
                <p>
                  Introducing CodeTracker, a powerful application designed to
                  streamline your development workflow and effortlessly track
                  the essential details of your GitHub commits and projects.
                  With CodeTracker, you can effortlessly organize and store
                  information about APIs, frameworks, and coding languages used
                  in each individual project, ensuring easy access to crucial
                  project details whenever you need them. CodeTracker empowers
                  developers to maintain a comprehensive record of their coding
                  endeavors, fostering better project management, collaboration,
                  and knowledge sharing. With its intuitive interface, robust
                  features, and powerful integrations, CodeTracker is the
                  must-have companion for any developer looking to stay
                  organized and efficient in their coding journey.
                </p>
              </div>
            </div>

            <div className="card-container">
              <div className="card">
                <p style={{ opacity: "0.4" }}>GITHUB</p>
                <hr />
                <p style={{ opacity: "0.4", fontSize: "14px" }}>
                  Fri Jan 27 2023
                </p>
                <p>
                  <b>bug fixes and improvements</b>
                  <br />
                  [Commit Hash]: ca4fd2346764670efceb49e197a607e7246db36b
                </p>
                <br />
                <p style={{ opacity: "0.4", fontSize: "14px" }}>
                  Thu Jan 26 2023
                </p>
                <p>
                  <b>stable</b>
                  <br />
                  [Commit Hash]: 93e7691f4b5f5cd2b8fd371cf084e09c61b1cb71
                </p>
                {/* <br />
                <p style={{ opacity: "0.4", fontSize: "14px" }}>
                  Tue Nov 29 2022
                </p>
                <p>
                  <b>stable</b>
                  <br />
                  [Commit Hash]: 8bbe7dd29a264403721df92a3a0c4399a9e3a330
                </p>
                <br />
                <p style={{ opacity: "0.4", fontSize: "14px" }}>
                  Thu Nov 03 2022
                </p>
                <p>
                  <b>bug fixes and improvements</b>
                  <br />
                  [Commit Hash]: 7d7d097634e9a5b88b3d122ae026788a29021d15
                </p>
                <br />
                <p style={{ opacity: "0.4", fontSize: "14px" }}>
                  Fri Aug 26 2022
                </p>
                <p>
                  <b>stable</b>
                  <br />
                  [Commit Hash]: 977a4bf62bf195c0d8ff77a97de2d11c0253b11c
                </p> */}
              </div>
            </div>

            <div className="card-container">
              <div className="card">
                <div className="container">
                  <p style={{ opacity: "0.4" }}>LANGUAGES</p>
                  <hr />
                  <div className="grid-container">
                    <div className="grid-item">
                      <img
                        src="imgs/splash/stackicons/logo-javascript.svg"
                        alt="language-logo"
                      />
                      <p style={{ textAlign: "center", fontSize: "14px" }}>
                        JavaScript
                      </p>
                    </div>
                    <div className="grid-item">
                      <img src="imgs/tech/Python.svg" alt="language-logo" />
                      <p style={{ textAlign: "center", fontSize: "14px" }}>
                        Python
                      </p>
                    </div>
                  </div>

                  <p style={{ opacity: "0.4", marginTop: "20px" }}>DATABASES</p>
                  <hr />
                  <div className="grid-container">
                    <div className="grid-item">
                      <img
                        src="imgs/splash/stackicons/mongodb.svg"
                        alt="database-logo"
                      />
                      <p style={{ textAlign: "center", fontSize: "14px" }}>
                        MongoDB
                      </p>
                    </div>
                  </div>

                  <p style={{ opacity: "0.4", marginTop: "20px" }}>APIs</p>
                  <hr />
                  <div className="grid-container">
                    <div className="grid-item">
                      <img src="imgs/tech/Postgres.svg" alt="api-logo" />
                      <p style={{ textAlign: "center", fontSize: "14px" }}>
                        Postgres
                      </p>
                    </div>
                  </div>

                  <p style={{ opacity: "0.4", marginTop: "20px" }}>FRAMEWORKS</p>
                  <hr />
                  <div className="grid-container">
                    <div className="grid-item">
                      <img src="imgs/tech/Nextjs.svg" alt="language-logo" />
                      <p style={{ textAlign: "center", fontSize: "14px" }}>
                        Nextjs
                      </p>
                    </div>
                  </div>

                  <p style={{ opacity: "0.4", marginTop: "20px" }}>CLOUDS</p>
                  <hr />
                  <div className="grid-container">
                    <div className="grid-item">
                      <img
                        src="imgs/splash/stackicons/aws.png"
                        alt="cloud-logo"
                      />
                      <p style={{ textAlign: "center", fontSize: "14px" }}>
                        AWS
                      </p>
                    </div>

                    <div className="grid-item">
                      <img
                        src="imgs/tech/Google Cloud Platform.svg"
                        alt="cloud-logo"
                      />
                      <p style={{ textAlign: "center", fontSize: "14px" }}>
                        Google Cloud
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main >
  );
}
