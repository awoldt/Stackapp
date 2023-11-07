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
              <button className="btn" style={{ fontSize: "24px" }}>
                Get Started
              </button>
            </div>

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
              style={{ marginTop: "8rem", marginBottom: "4rem;" }}
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
      </section>

      <footer>
        <div className="footer-container">
          <p>&copy;Stack 2023. All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  );
}
