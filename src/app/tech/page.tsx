/* eslint-disable @next/next/no-img-element */
import {
  IsValidAccountCookie,
  SortTechOfferedArray,
  TechList,
} from "@/functions";
import { Tech, stacksCollection, techCollection } from "@/services/mongodb";
import { Metadata } from "next";
import { cookies } from "next/headers";
import Nav from "../../components/CustomNav";
import { Stack } from "@/models/stacks";

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
  const allStacks = (await stacksCollection.find({}).toArray()) as Stack[];

  const query = (await techCollection
    .aggregate([
      {
        $group: {
          _id: "$type",
          tech: { $push: "$$ROOT" },
        },
      },
    ])
    .toArray()) as TechList[];

  const totalTech = query.reduce(
    (accumulator, currentValue) => accumulator + currentValue.tech.length,
    0
  );

  const sortedTechList = SortTechOfferedArray(query, allStacks);

  return (
    <>
      <main>
        <h1>Technology that Represents Your Stacks</h1>
        <p>
          At Stack, there are over {totalTech} technogies available to showcase
          how your application was built.
        </p>

        {sortedTechList.map((x) => {
          return (
            <>
              {x._id === "language" && (
                <>
                  <div className="tech-type-div">
                    <h2
                      style={{ display: "inline-block", marginRight: "10px" }}
                    >
                      Languages
                    </h2>

                    <p>
                      Programming languages are the building block for any
                      application.
                    </p>

                    {x.tech.map((x, index) => {
                      return (
                        <div key={index}>
                          <span style={{ color: "red" }}>
                            Used in {x.numOfOccurences} stacks
                          </span>
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
                </>
              )}
              {x._id === "database" && (
                <>
                  <div className="tech-type-div">
                    <h2
                      style={{ display: "inline-block", marginRight: "10px" }}
                    >
                      Databases
                    </h2>

                    <p>
                      Every appliaction needs data to showcase on the frontend.
                      There are many different choices when picking a database.
                    </p>

                    {x.tech.map((x, index) => {
                      return (
                        <div key={index}>
                          <span style={{ color: "red" }}>
                            Used in {x.numOfOccurences} stacks
                          </span>
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
                </>
              )}
              {x._id === "api" && (
                <>
                  <div className="tech-type-div">
                    <h2
                      style={{ display: "inline-block", marginRight: "10px" }}
                    >
                      APIs
                    </h2>

                    <p>
                      APIs help get data from other companies to use for your
                      application
                    </p>

                    {x.tech.map((x, index) => {
                      return (
                        <div key={index}>
                          <span style={{ color: "red" }}>
                            Used in {x.numOfOccurences} stacks
                          </span>
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
                </>
              )}
              {x._id === "cloud" && (
                <>
                  <div className="tech-type-div">
                    <h2
                      style={{ display: "inline-block", marginRight: "10px" }}
                    >
                      Clouds
                    </h2>

                    <p>
                      Tapping into other companies compute can power your
                      application and take it to the next level
                    </p>

                    {x.tech.map((x, index) => {
                      return (
                        <div key={index}>
                          <span style={{ color: "red" }}>
                            Used in {x.numOfOccurences} stacks
                          </span>
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
                </>
              )}
              {x._id === "framework" && (
                <>
                  <div className="tech-type-div">
                    <h2
                      style={{ display: "inline-block", marginRight: "10px" }}
                    >
                      Frameworks
                    </h2>

                    <p>
                      Frameworks take boilerplate code out of the equation and
                      can greatly simplify application development
                    </p>

                    {x.tech.map((x, index) => {
                      return (
                        <div key={index}>
                          <span style={{ color: "red" }}>
                            Used in {x.numOfOccurences} stacks
                          </span>
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
                </>
              )}
            </>
          );
        })}
      </main>
    </>
  );
}
