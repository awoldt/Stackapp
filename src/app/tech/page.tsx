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
                    <h2 className="subheading" style={{ opacity: "0.6", textAlign: "center", fontWeight: "500" }}>
                      <img
                        src="/imgs/icons/code.svg"
                        alt="language"
                        width={20}
                        height={14}
                        style={{ display: "inline" }}
                      />LANGUAGES
                    </h2>
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
                            className="nav-element"
                            href={x.site}
                            target="_blank"
                            style={{ display: "block", marginTop: "10px", fontWeight: "600", maxWidth: "fit-content" }}
                          >
                            Learn More.
                          </a>
                        </div>
                      );
                    })}
                  </>
                )}
                {x._id === "database" && (
                  <>
                    <h2 className="subheading" style={{ opacity: "0.6", marginTop: "40px", textAlign: "center", fontWeight: "500" }}>
                      <img
                        src="/imgs/icons/database-fill.svg"
                        alt="database"
                        width={20}
                        height={14}
                        style={{ display: "inline" }}
                      />DATABASES
                    </h2>
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
                            className="nav-element"
                            href={x.site}
                            target="_blank"
                            style={{ display: "block", marginTop: "10px", fontWeight: "600", maxWidth: "fit-content" }}
                          >
                            Learn More.
                          </a>
                        </div>
                      );
                    })}
                  </>
                )}
                {x._id === "api" && (
                  <>
                    <h2 className="subheading" style={{ opacity: "0.6", marginTop: "40px", textAlign: "center", fontWeight: "500" }}>
                      <img
                        src="/imgs/icons/api.svg"
                        alt="api"
                        width={20}
                        height={14}
                        style={{ display: "inline" }}
                      />APIs
                    </h2>
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
                            className="nav-element"
                            href={x.site}
                            target="_blank"
                            style={{ display: "block", marginTop: "10px", fontWeight: "600", maxWidth: "fit-content" }}
                          >
                            Learn More.
                          </a>
                        </div>
                      );
                    })}
                  </>
                )}
                {x._id === "framework" && (
                  <>
                    <h2 className="subheading" style={{ opacity: "0.6", marginTop: "40px", textAlign: "center", fontWeight: "500" }}>
                      <img
                        src="/imgs/icons/framework.svg"
                        alt="api"
                        width={20}
                        height={14}
                        style={{ display: "inline" }}
                      />FRAMEWORKS
                    </h2>
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
                            className="nav-element"
                            href={x.site}
                            target="_blank"
                            style={{ display: "block", marginTop: "10px", fontWeight: "600", maxWidth: "fit-content" }}
                          >
                            Learn More.
                          </a>
                        </div>
                      );
                    })}
                  </>
                )}
                {x._id === "cloud" && (
                  <>
                    <h2 className="subheading" style={{ opacity: "0.6", marginTop: "40px", textAlign: "center", fontWeight: "500" }}>
                      <img
                        src="/imgs/icons/cloud-fill.svg"
                        alt="cloud"
                        width={20}
                        height={14}
                        style={{ display: "inline" }}
                      />CLOUDS
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
                            className="nav-element"
                            href={x.site}
                            target="_blank"
                            style={{ display: "block", marginTop: "10px", fontWeight: "600", maxWidth: "fit-content" }}
                          >
                            Learn More.
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
