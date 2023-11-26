/* eslint-disable @next/next/no-img-element */
import { IsValidAccountCookie } from "@/functions";
import { techCollection } from "@/services/mongodb";
import { Metadata } from "next";
import { cookies } from "next/headers";
import Nav from "../../components/CustomNav";

export const metadata: Metadata = {
  title: "The Technology Powering Your Stacks",
  description:
    "Explore a comprehensive array of programming languages, databases, APIs, cloud deployment options, and frameworks available for showcasing on your application's stack page.",
  alternates: {
    canonical: "https://stackapp.xyz/tech",
  },
  openGraph: {
    type: "website",
    url: "https://stackapp.xyz/tech",
    title: "App Stack Technologies",
    description:
      "Discover a diverse range of programming languages, databases, APIs, cloud deployment solutions, and frameworks to feature on your application's stack page.",
    siteName: "Stack",
    images: [
      {
        url: "https://stackapp.xyz/imgs/splash/image.png",
      },
    ],
  },
};

export default async function Page() {
  const languages = [];
  const databases = [];
  const apis = [];
  const clouds = [];
  const frameworks = [];

  const tech = await techCollection.find().toArray();

  for (let i = 0; i < tech.length; i++) {
    switch (tech[i].type) {
      case "language":
        languages.push(tech[i]);
        break;

      case "database":
        databases.push(tech[i]);
        break;

      case "api":
        apis.push(tech[i]);
        break;

      case "cloud":
        clouds.push(tech[i]);
        break;

      case "framework":
        frameworks.push(tech[i]);
        break;
    }
  }

  const cookieStore = cookies();
  const account = await IsValidAccountCookie(cookieStore.get("a_id"));

  return (
    <>
      <main>
        <h1>Technology that Represents Your Stacks</h1>
        <p>
          At Stack, there are over {tech.length} technogies available to
          showcase how your application was built.
        </p>

        <div>
          <h2 style={{ display: "inline-block", marginRight: "10px" }}>
            Languages
          </h2>
          <span>({languages.length})</span>
          <p>
            Programming languages are the building block for any application.
          </p>
          {languages.map((x, index) => {
            return (
              <div key={index}>
                <img
                  src={`/imgs/tech/${x.name}.svg`}
                  width={50}
                  alt={`${x.name} logo`}
                />
                <h3>{x.name}</h3>
                <p>{x.description}</p>
              </div>
            );
          })}
        </div>

        <div>
          <h2 style={{ display: "inline-block", marginRight: "10px" }}>
            Databases
          </h2>
          <span>({databases.length})</span>
          <p>
            Every appliaction needs data to showcase on the frontend. There are
            many different choices when picking a database.
          </p>

          {databases.map((x, index) => {
            return (
              <div key={index}>
                <img
                  src={`/imgs/tech/${x.name}.svg`}
                  width={50}
                  alt={`${x.name} logo`}
                />
                <h3>{x.name}</h3>
                <p>{x.description}</p>
              </div>
            );
          })}
        </div>

        <div>
          <h2 style={{ display: "inline-block", marginRight: "10px" }}>APIs</h2>
          <span>({apis.length})</span>
          <p>
            APIs help get data from other companies to use for your application
          </p>

          {apis.map((x, index) => {
            return (
              <div key={index}>
                <img
                  src={`/imgs/tech/${x.name}.svg`}
                  width={50}
                  alt={`${x.name} logo`}
                />
                <h3>{x.name}</h3>
                <p>{x.description}</p>
              </div>
            );
          })}
        </div>

        <div>
          <h2 style={{ display: "inline-block", marginRight: "10px" }}>
            Clouds
          </h2>
          <span>({clouds.length})</span>
          <p>
            Tapping into other companies compute can power your application and
            take it to the next level
          </p>

          {clouds.map((x, index) => {
            return (
              <div key={index}>
                <img
                  src={`/imgs/tech/${x.name}.svg`}
                  width={50}
                  alt={`${x.name} logo`}
                />
                <h3>{x.name}</h3>
                <p>{x.description}</p>
              </div>
            );
          })}
        </div>

        <div>
          <h2 style={{ display: "inline-block", marginRight: "10px" }}>
            Frameworks
          </h2>
          <span>({frameworks.length})</span>
          <p>
            Frameworks take boilerplate code out of the equation and can greatly
            simplify application development
          </p>

          {frameworks.map((x, index) => {
            return (
              <div key={index}>
                <img
                  src={`/imgs/tech/${x.name}.svg`}
                  width={50}
                  alt={`${x.name} logo`}
                />
                <h3>{x.name}</h3>
                <p>{x.description}</p>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
