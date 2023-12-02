/* eslint-disable @next/next/no-img-element */

import { Metadata } from "next";
import { IsValidAccountCookie } from "@/functions";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "A Platform for Modern Tech Stack Visualization | Stack",
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
  return (
    <main>
      <section>
        <div className="card-container" id="landing">
          <div className="card-empty-splash">
            <h1 className="splash" id="splash">
              Visualize Tech Stacks with Impact.
            </h1>
            <h2
              style={{
                marginTop: ".8rem",
                fontWeight: 500,
                fontSize: 24,
              }}
            >
              Stack is a platform designed to help developers showcase
              their tech stacks.
            </h2>

            <div className="btn-container" style={{ justifyContent: "left", marginBottom: "18rem" }}>
              <a
                href="/signup"
                className="btn-landing"
                style={{ textAlign: "center" }}
              >
                Start Stacking
              </a>
              <a
                href="/tech"
                className="btn-landing"
                style={{ textAlign: "center" }}
              >
                Explore Tech
              </a>
            </div>

            <div className="btn-container">
              <span>
                <i className="fa-brands fa-square-js fa-2xl"></i> Built with
                Next.js
              </span>
              <span>
                <i className="fa-solid fa-server fa-2xl"></i> Stored on MongoDB
              </span>
              <span>
                <i className="fa-brands fa-github fa-2xl"></i> GitHub
                Integration
              </span>
              <span style={{ marginBottom: "0rem" }}>
                <i className="fa-solid fa-shield fa-2xl"></i> Modern Security
                Standards
              </span>
            </div>

            <div
              className="home-container"
              style={{ marginTop: "8rem", alignItems: "center" }}
            >
              <div className="card">
                <h2>
                  The Future of Tech Stack Presentation.
                </h2>
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
              <div className="splash-image" style={{ background: "none", boxShadow: "none" }}>
                <img src="/imgs/splash/gear.svg" style={{ width: "100%", objectFit: "contain" }} />
              </div>
            </div>


            <div
              className="home-container"
              style={{ marginTop: "2rem", alignItems: "center" }}
            >
              <div className="splash-image" style={{ background: "none", boxShadow: "none" }}>
                <img src="/imgs/splash/computer.svg" style={{ width: "100%", objectFit: "contain" }} />
              </div>
              <div className="card">
                <h2>
                  Unleash the Power Behind your Apps.
                </h2>
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
            </div>
            <div
              className="home-container"
              style={{ marginTop: "2rem", alignItems: "center" }}
            >

              <div className="card">
                <h2>
                  Your Custom Tech Stack Showcase.
                </h2>
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
              <div className="splash-image" style={{ background: "none", boxShadow: "none" }}>
                <img src="/imgs/splash/phone.svg" style={{ width: "100%", objectFit: "contain" }} />
              </div>
            </div>

            <div className="home-container" style={{ marginTop: "2rem", alignItems: "center" }}>
              <div className="card" style={{ height: "fitContent", textAlign: "left", width: "100%" }}>
                <h2>
                  Explore Community Stacks.
                </h2>
                <p>
                  Start exploring stacks from other members of the community to gain a comprehensive
                  understanding of the diverse and dynamic nature of Stack and its myriad possibilities in the realm of
                  software development.
                </p>
                <div className="btn-container" style={{ marginTop: "1rem", marginBottom: "0rem" }}>
                  <button className="btn-landing">Explore Stacks</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main >
  );
}
