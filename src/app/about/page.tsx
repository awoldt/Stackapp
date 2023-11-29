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
    <div>
      <h1>About</h1>
      <p>
        Stack was developed to provide developers with a straightforward tool
        for highlighting the technologies incorporated into their tech stack,
        offering an accessible way to showcase their technical expertise to a
        wider audience
      </p>

      <h2>Created By</h2>
      <div>
        <a href="https://awoldt.dev/">Alex Breckwoldt</a>
      </div>

      <div>
        <a>Justin Davenport</a>
      </div>
    </div>
  );
}
