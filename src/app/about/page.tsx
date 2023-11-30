import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Stack",
  alternates: {
    canonical: "https://stackapp.xyz/about",
  },
};

export default function Page() {
  return (
    <>
      <div className="card-container-title">
        <div className="card-empty-wide">
          <h1>About Stack</h1>
          <p className="subheading">Learn more about the platform that is Stack.</p>
        </div>
      </div>
      <div className="card-container">
        <div className="card">
          <p>
            Stack was developed to provide developers with a straightforward
            tool for highlighting the technologies incorporated into their tech
            stack, offering an accessible way to showcase their technical
            expertise to a wider audience
          </p>

          <h3 style={{ opacity: "0.4", marginTop: "20px" }}>CREATORS</h3>
          <hr />

          <ul>
            <li>
              <a href="https://awoldt.dev/">Alex Breckwoldt</a>
            </li>
            <li>
              <a>Justin Davenport</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
