/* eslint-disable @next/next/no-img-element */
import {
  IsValidAccountCookie,
  SortTechOfferedArray,
  TechList,
} from "@/functions";
import { Tech, stacksCollection, techCollection } from "@/services/mongodb";
import { Metadata } from "next";
import { cookies } from "next/headers";
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
      <div className="card-container-title">
        <div className="card-empty-wide">
          <h1>Technologies</h1>
          <p>
            At Stack, we offer a diverse range of more than {totalTech}{" "}
            technologies, all accessible for demonstrating the construction of
            your application.
          </p>
        </div>
      </div>

      <div className="card-container">
        <div className="card">
          {sortedTechList.map((x) => {
            return (
              <>
                {x._id === "language" && (
                  <>
                    <h2 style={{ opacity: "0.4", textAlign: "center" }}>
                      LANGUAGES
                    </h2>

                    {/* <p>
                        Programming languages are the building block for any
                        application.
                      </p> */}
                    <hr />

                    {x.tech.map((x, index) => {
                      return (
                        <div
                          key={index}
                          className="card"
                          style={{ width: "100%", marginBottom: "1rem" }}
                        >
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <img
                              src={`/imgs/tech/${x.name}.svg`}
                              width={60}
                              alt={`${x.name} logo`}
                              style={{ borderRadius: "4px" }}
                            />
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <h3>
                                &nbsp;<b>{x.name}</b>&nbsp;
                              </h3>
                              <span style={{ color: "#2667ff" }}>
                                &nbsp;&nbsp;Used in over {x.numOfOccurences}{" "}
                                Stacks!
                              </span>
                            </div>
                          </div>
                          <hr />
                          <p>{x.description}</p>

                          <a
                            href={x.site}
                            target="_blank"
                            style={{ display: "block", marginTop: "25px" }}
                          >
                            Learn more
                          </a>
                        </div>
                      );
                    })}
                  </>
                )}
                {x._id === "database" && (
                  <>
                    <h2 style={{ opacity: "0.4", textAlign: "center" }}>
                      DATABASES
                    </h2>

                    {/* <p>
                      Every appliaction needs data to showcase on the frontend.
                      There are many different choices when picking a database.
                    </p> */}
                    <hr />

                    {x.tech.map((x, index) => {
                      return (
                        <div
                          key={index}
                          className="card"
                          style={{ width: "100%", marginBottom: "1rem" }}
                        >
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <img
                              src={`/imgs/tech/${x.name}.svg`}
                              width={60}
                              alt={`${x.name} logo`}
                              style={{ borderRadius: "4px" }}
                            />
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <h3>
                                &nbsp;<b>{x.name}</b>&nbsp;
                              </h3>
                              <span style={{ color: "#2667ff" }}>
                                &nbsp;&nbsp;Used in over {x.numOfOccurences}{" "}
                                Stacks!
                              </span>
                            </div>
                          </div>
                          <hr />
                          <p>{x.description}</p>

                          <a
                            href={x.site}
                            target="_blank"
                            style={{ display: "block", marginTop: "25px" }}
                          >
                            Learn more
                          </a>
                        </div>
                      );
                    })}
                  </>
                )}
                {x._id === "api" && (
                  <>
                    <h2 style={{ opacity: "0.4", textAlign: "center" }}>
                      APIs
                    </h2>

                    {/* <p>
                      APIs help get data from other companies to use for your
                      application.
                    </p> */}
                    <hr />

                    {x.tech.map((x, index) => {
                      return (
                        <div
                          key={index}
                          className="card"
                          style={{ width: "100%", marginBottom: "1rem" }}
                        >
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <img
                              src={`/imgs/tech/${x.name}.svg`}
                              width={60}
                              alt={`${x.name} logo`}
                              style={{ borderRadius: "4px" }}
                            />
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <h3>
                                &nbsp;<b>{x.name}</b>&nbsp;
                              </h3>
                              <span style={{ color: "#2667ff" }}>
                                &nbsp;&nbsp;Used in over {x.numOfOccurences}{" "}
                                Stacks!
                              </span>
                            </div>
                          </div>
                          <hr />
                          <p>{x.description}</p>

                          <a
                            href={x.site}
                            target="_blank"
                            style={{ display: "block", marginTop: "25px" }}
                          >
                            Learn more
                          </a>
                        </div>
                      );
                    })}
                  </>
                )}
                {x._id === "cloud" && (
                  <>
                    <h2 style={{ opacity: "0.4", textAlign: "center" }}>
                      CLOUDS
                    </h2>

                    {/* <p>
                      Tapping into other companies compute can power your
                      application and take it to the next level
                    </p> */}
                    <hr />

                    {x.tech.map((x, index) => {
                      return (
                        <div
                          key={index}
                          className="card"
                          style={{ width: "100%", marginBottom: "1rem" }}
                        >
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <img
                              src={`/imgs/tech/${x.name}.svg`}
                              width={60}
                              alt={`${x.name} logo`}
                              style={{ borderRadius: "4px" }}
                            />
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <h3>
                                &nbsp;<b>{x.name}</b>&nbsp;
                              </h3>
                              <span style={{ color: "#2667ff" }}>
                                &nbsp;&nbsp;Used in over {x.numOfOccurences}{" "}
                                Stacks!
                              </span>
                            </div>
                          </div>
                          <hr />
                          <p>{x.description}</p>

                          <a
                            href={x.site}
                            target="_blank"
                            style={{ display: "block", marginTop: "25px" }}
                          >
                            Learn more
                          </a>
                        </div>
                      );
                    })}
                  </>
                )}
                {x._id === "framework" && (
                  <>
                    <h2 style={{ opacity: "0.4", textAlign: "center" }}>
                      FRAMEWORKS
                    </h2>

                    {/* <p>
                      Frameworks take boilerplate code out of the equation and
                      can greatly simplify application development
                    </p> */}
                    <hr />

                    {x.tech.map((x, index) => {
                      return (
                        <div
                          key={index}
                          className="card"
                          style={{ width: "100%", marginBottom: "1rem" }}
                        >
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <img
                              src={`/imgs/tech/${x.name}.svg`}
                              width={60}
                              alt={`${x.name} logo`}
                              style={{ borderRadius: "4px" }}
                            />
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <h3>
                                &nbsp;<b>{x.name}</b>&nbsp;
                              </h3>
                              <span style={{ color: "#2667ff" }}>
                                &nbsp;&nbsp;Used in over {x.numOfOccurences}{" "}
                                Stacks!
                              </span>
                            </div>
                          </div>
                          <hr />
                          <p>{x.description}</p>

                          <a
                            href={x.site}
                            target="_blank"
                            style={{ display: "block", marginTop: "25px" }}
                          >
                            Learn more
                          </a>
                        </div>
                      );
                    })}
                  </>
                )}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
