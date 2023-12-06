"use client";

import { TechList } from "@/functions";
import { useState } from "react";

const possibleTechTypes = ["language", "database", "api", "cloud", "framework"];

export default function TechList({
  sortedTechList,
  defaultSection,
}: {
  sortedTechList: TechList[];
  defaultSection: string | undefined;
}) {
  const [section, setSection] = useState<string>(
    defaultSection === undefined
      ? "language"
      : !possibleTechTypes.includes(defaultSection)
        ? "language"
        : defaultSection
  );

  return (
    <>
      <div className="card-container">
        <div className="card-empty-wide" style={{ marginTop: "0rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "left",
              flexWrap: "wrap",
            }}
          >
            <span
              className={section === "language" ? "btn-selected" : "btn"}
              style={{
                marginLeft: ".2rem",
                marginRight: ".2rem",
                marginBottom: ".4rem",
              }}
              onClick={() => {
                if (section !== "language") {
                  setSection("language");
                }
              }}
            >
              Languages
            </span>

            <span
              className={section === "database" ? "btn-selected" : "btn"}
              style={{
                marginLeft: ".2rem",
                marginRight: ".2rem",
                marginBottom: ".4rem",
              }}
              onClick={() => {
                if (section !== "database") {
                  setSection("database");
                }
              }}
            >
              Databases
            </span>

            <span
              className={section === "api" ? "btn-selected" : "btn"}
              style={{
                marginLeft: ".2rem",
                marginRight: ".2rem",
                marginBottom: ".4rem",
              }}
              onClick={() => {
                if (section !== "api") {
                  setSection("api");
                }
              }}
            >
              APIs
            </span>

            <span
              className={section === "framework" ? "btn-selected" : "btn"}
              style={{
                marginLeft: ".2rem",
                marginRight: ".2rem",
                marginBottom: ".4rem",
              }}
              onClick={() => {
                if (section !== "framework") {
                  setSection("framework");
                }
              }}
            >
              Frameworks
            </span>

            <span
              className={section === "cloud" ? "btn-selected" : "btn"}
              style={{
                marginLeft: ".2rem",
                marginRight: ".2rem",
                marginBottom: ".4rem",
              }}
              onClick={() => {
                if (section !== "cloud") {
                  setSection("cloud");
                }
              }}
            >
              Clouds
            </span>
          </div>
        </div>
      </div>
      <div className="card-container">
        <div className="card">
          {sortedTechList.map((x, index) => {
            return (
              <div key={index}>
                {/* LANGUAGES */}
                {x._id === "language" && (
                  <>
                    {section === "language" && (
                      <>
                        <p
                          className="subtitle"
                          style={{ opacity: "0.6", textAlign: "center" }}
                        >
                          LANGUAGES
                        </p>
                        <hr />
                        {x.tech.map((x, index2) => {
                          return (
                            <a
                              href={x.site}
                              target="_blank"
                              style={{
                                display: "block",
                                fontWeight: "600",
                                maxWidth: "fit-content",
                              }}
                              key={index2}
                            >
                              <div className="hover-container">
                                <div className="left-top"></div>
                                <div className="left-bottom"></div>
                                <div className="right-top"></div>
                                <div className="right-bottom"></div>
                                <div
                                  key={index}
                                  className="profile-stack-container"
                                  style={{ flexDirection: "column" }}
                                  id={x.name}
                                >
                                  <div
                                    style={{
                                      width: "100%",
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <img
                                      src={`/imgs/tech/${x.name}.svg`}
                                      width={100}
                                      alt={`${x.name} logo`}
                                      style={{ borderRadius: "20px" }}
                                    />

                                    <div
                                      className="stack-description"
                                      style={{
                                        margin: "0",
                                        marginLeft: "1rem",
                                        textAlign: "left",
                                      }}
                                    >
                                      <h2>{x.name}</h2>
                                      {x.numOfOccurences! > 0 && (
                                        <p style={{ color: "#2667ff" }}>
                                          {x.numOfOccurences === 1 && (
                                            <>Used in 1 Stack!</>
                                          )}
                                          {x.numOfOccurences! > 1 && (
                                            <>
                                              Used in over {x.numOfOccurences}{" "}
                                              Stacks!
                                            </>
                                          )}
                                        </p>
                                      )}
                                    </div>
                                  </div>
                                  <hr />
                                  <p>{x.description}</p>
                                </div>
                              </div>
                            </a>
                          );
                        })}
                      </>
                    )}
                    {section !== "language" && (
                      <>
                        {x.tech.map((x, index2) => {
                          return (
                            <div
                              key={index2}
                              className="card"
                              style={{ display: "none" }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
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
                                  {x.numOfOccurences! > 0 && (
                                    <span style={{ color: "#2667ff" }}>
                                      {x.numOfOccurences === 1 && (
                                        <>&nbsp;&nbsp;Used in 1 Stack!</>
                                      )}
                                      {x.numOfOccurences! > 1 && (
                                        <>
                                          &nbsp;&nbsp;Used in over{" "}
                                          {x.numOfOccurences} Stacks!
                                        </>
                                      )}
                                    </span>
                                  )}
                                </div>
                              </div>
                              <hr />
                              <p>{x.description}</p>
                              <a
                                href={x.site}
                                target="_blank"
                                style={{
                                  display: "block",
                                  fontWeight: "600",
                                  maxWidth: "fit-content",
                                }}
                              >
                                Learn More...
                              </a>
                            </div>
                          );
                        })}
                      </>
                    )}
                  </>
                )}
                {/* DATABASES */}
                {x._id === "database" && (
                  <>
                    {section === "database" && (
                      <>
                        <p
                          className="subtitle"
                          style={{ opacity: "0.6", textAlign: "center" }}
                        >
                          DATABASES
                        </p>
                        <hr />
                        {x.tech.map((x, index2) => {
                          return (
                            <a
                              key={index2}
                              href={x.site}
                              target="_blank"
                              style={{
                                display: "block",
                                fontWeight: "600",
                                maxWidth: "fit-content",
                              }}
                            >
                              <div className="hover-container">
                                <div className="left-top"></div>
                                <div className="left-bottom"></div>
                                <div className="right-top"></div>
                                <div className="right-bottom"></div>
                                <div
                                  key={index}
                                  className="profile-stack-container"
                                  style={{ flexDirection: "column" }}
                                  id={x.name}
                                >
                                  <div
                                    style={{
                                      width: "100%",
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <img
                                      src={`/imgs/tech/${x.name}.svg`}
                                      width={100}
                                      alt={`${x.name} logo`}
                                      style={{ borderRadius: "20px" }}
                                    />

                                    <div
                                      className="stack-description"
                                      style={{
                                        margin: "0",
                                        marginLeft: "1rem",
                                        textAlign: "left",
                                      }}
                                    >
                                      <h2>{x.name}</h2>
                                      {x.numOfOccurences! > 0 && (
                                        <p style={{ color: "#2667ff" }}>
                                          {x.numOfOccurences === 1 && (
                                            <>Used in 1 Stack!</>
                                          )}
                                          {x.numOfOccurences! > 1 && (
                                            <>
                                              Used in over {x.numOfOccurences}{" "}
                                              Stacks!
                                            </>
                                          )}
                                        </p>
                                      )}
                                    </div>
                                  </div>
                                  <hr />
                                  <p>{x.description}</p>
                                </div>
                              </div>
                            </a>
                          );
                        })}
                      </>
                    )}
                    {section !== "database" && (
                      <>
                        {x.tech.map((x, index2) => {
                          return (
                            <div
                              key={index2}
                              className="card"
                              style={{ display: "none" }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
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
                                  {x.numOfOccurences! > 0 && (
                                    <span style={{ color: "#2667ff" }}>
                                      {x.numOfOccurences === 1 && (
                                        <>&nbsp;&nbsp;Used in 1 Stack!</>
                                      )}
                                      {x.numOfOccurences! > 1 && (
                                        <>
                                          &nbsp;&nbsp;Used in over{" "}
                                          {x.numOfOccurences} Stacks!
                                        </>
                                      )}
                                    </span>
                                  )}
                                </div>
                              </div>
                              <hr />
                              <p>{x.description}</p>
                              <a
                                href={x.site}
                                target="_blank"
                                style={{
                                  display: "block",
                                  fontWeight: "600",
                                  maxWidth: "fit-content",
                                }}
                              >
                                Learn More...
                              </a>
                            </div>
                          );
                        })}
                      </>
                    )}
                  </>
                )}
                {/* APIS */}
                {x._id === "api" && (
                  <>
                    {section === "api" && (
                      <>
                        <p
                          className="subtitle"
                          style={{ opacity: "0.6", textAlign: "center" }}
                        >
                          APIs
                        </p>
                        <hr />
                        {x.tech.map((x, index2) => {
                          return (
                            <a
                              key={index2}
                              href={x.site}
                              target="_blank"
                              style={{
                                display: "block",
                                fontWeight: "600",
                                maxWidth: "fit-content",
                              }}
                            >
                              <div className="hover-container">
                                <div className="left-top"></div>
                                <div className="left-bottom"></div>
                                <div className="right-top"></div>
                                <div className="right-bottom"></div>
                                <div
                                  key={index}
                                  className="profile-stack-container"
                                  style={{ flexDirection: "column" }}
                                  id={x.name}
                                >
                                  <div
                                    style={{
                                      width: "100%",
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <img
                                      src={`/imgs/tech/${x.name}.svg`}
                                      width={100}
                                      alt={`${x.name} logo`}
                                      style={{ borderRadius: "20px" }}
                                    />

                                    <div
                                      className="stack-description"
                                      style={{
                                        margin: "0",
                                        marginLeft: "1rem",
                                        textAlign: "left",
                                      }}
                                    >
                                      <h2>{x.name}</h2>
                                      {x.numOfOccurences! > 0 && (
                                        <p style={{ color: "#2667ff" }}>
                                          {x.numOfOccurences === 1 && (
                                            <>Used in 1 Stack!</>
                                          )}
                                          {x.numOfOccurences! > 1 && (
                                            <>
                                              Used in over {x.numOfOccurences}{" "}
                                              Stacks!
                                            </>
                                          )}
                                        </p>
                                      )}
                                    </div>
                                  </div>
                                  <hr />
                                  <p>{x.description}</p>
                                </div>
                              </div>
                            </a>
                          );
                        })}
                      </>
                    )}
                    {section !== "api" && (
                      <>
                        {x.tech.map((x, index2) => {
                          return (
                            <div
                              key={index2}
                              className="card"
                              style={{ display: "none" }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
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
                                    &nbsp;<b>{x.name} API</b>&nbsp;
                                  </h3>
                                  {x.numOfOccurences! > 0 && (
                                    <span style={{ color: "#2667ff" }}>
                                      {x.numOfOccurences === 1 && (
                                        <>&nbsp;&nbsp;Used in 1 Stack!</>
                                      )}
                                      {x.numOfOccurences! > 1 && (
                                        <>
                                          &nbsp;&nbsp;Used in over{" "}
                                          {x.numOfOccurences} Stacks!
                                        </>
                                      )}
                                    </span>
                                  )}
                                </div>
                              </div>
                              <hr />
                              <p>{x.description}</p>
                              <a
                                href={x.site}
                                target="_blank"
                                style={{
                                  display: "block",
                                  fontWeight: "600",
                                  maxWidth: "fit-content",
                                }}
                              >
                                Learn More...
                              </a>
                            </div>
                          );
                        })}
                      </>
                    )}
                  </>
                )}
                {/* FRAMEWORKS */}
                {x._id === "framework" && (
                  <>
                    {section === "framework" && (
                      <>
                        <p
                          className="subtitle"
                          style={{ opacity: "0.6", textAlign: "center" }}
                        >
                          FRAMEWORKS
                        </p>
                        <hr />
                        {x.tech.map((x, index2) => {
                          return (
                            <a
                              key={index2}
                              href={x.site}
                              target="_blank"
                              style={{
                                display: "block",
                                fontWeight: "600",
                                maxWidth: "fit-content",
                              }}
                            >
                              <div className="hover-container">
                                <div className="left-top"></div>
                                <div className="left-bottom"></div>
                                <div className="right-top"></div>
                                <div className="right-bottom"></div>
                                <div
                                  key={index}
                                  className="profile-stack-container"
                                  style={{ flexDirection: "column" }}
                                  id={x.name}
                                >
                                  <div
                                    style={{
                                      width: "100%",
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <img
                                      src={`/imgs/tech/${x.name}.svg`}
                                      width={100}
                                      alt={`${x.name} logo`}
                                      style={{ borderRadius: "20px" }}
                                    />

                                    <div
                                      className="stack-description"
                                      style={{
                                        margin: "0",
                                        marginLeft: "1rem",
                                        textAlign: "left",
                                      }}
                                    >
                                      <h2>{x.name}</h2>
                                      {x.numOfOccurences! > 0 && (
                                        <p style={{ color: "#2667ff" }}>
                                          {x.numOfOccurences === 1 && (
                                            <>Used in 1 Stack!</>
                                          )}
                                          {x.numOfOccurences! > 1 && (
                                            <>
                                              Used in over {x.numOfOccurences}{" "}
                                              Stacks!
                                            </>
                                          )}
                                        </p>
                                      )}
                                    </div>
                                  </div>
                                  <hr />
                                  <p>{x.description}</p>
                                </div>
                              </div>
                            </a>
                          );
                        })}
                      </>
                    )}
                    {section !== "framework" && (
                      <>
                        {x.tech.map((x, index2) => {
                          return (
                            <div
                              key={index2}
                              className="card"
                              style={{ display: "none" }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
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
                                  {x.numOfOccurences! > 0 && (
                                    <span style={{ color: "#2667ff" }}>
                                      {x.numOfOccurences === 1 && (
                                        <>&nbsp;&nbsp;Used in 1 Stack!</>
                                      )}
                                      {x.numOfOccurences! > 1 && (
                                        <>
                                          &nbsp;&nbsp;Used in over{" "}
                                          {x.numOfOccurences} Stacks!
                                        </>
                                      )}
                                    </span>
                                  )}
                                </div>
                              </div>
                              <hr />
                              <p>{x.description}</p>
                              <a
                                href={x.site}
                                target="_blank"
                                style={{
                                  display: "block",
                                  fontWeight: "600",
                                  maxWidth: "fit-content",
                                }}
                              >
                                Learn More...
                              </a>
                            </div>
                          );
                        })}
                      </>
                    )}
                  </>
                )}
                {/* CLOUDS */}
                {x._id === "cloud" && (
                  <>
                    {section === "cloud" && (
                      <>
                        <p
                          className="subtitle"
                          style={{ opacity: "0.6", textAlign: "center" }}
                        >
                          CLOUD SERVICES
                        </p>
                        <hr />
                        {x.tech.map((x, index2) => {
                          return (
                            <a
                              key={index2}
                              href={x.site}
                              target="_blank"
                              style={{
                                display: "block",
                                fontWeight: "600",
                                maxWidth: "fit-content",
                              }}
                            >
                              <div className="hover-container">
                                <div className="left-top"></div>
                                <div className="left-bottom"></div>
                                <div className="right-top"></div>
                                <div className="right-bottom"></div>
                                <div
                                  key={index}
                                  className="profile-stack-container"
                                  style={{ flexDirection: "column" }}
                                  id={x.name}
                                >
                                  <div
                                    style={{
                                      width: "100%",
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <img
                                      src={`/imgs/tech/${x.name}.svg`}
                                      width={100}
                                      alt={`${x.name} logo`}
                                      style={{ borderRadius: "20px" }}
                                    />

                                    <div
                                      className="stack-description"
                                      style={{
                                        margin: "0",
                                        marginLeft: "1rem",
                                        textAlign: "left",
                                      }}
                                    >
                                      <h2>{x.name}</h2>
                                      {x.numOfOccurences! > 0 && (
                                        <p style={{ color: "#2667ff" }}>
                                          {x.numOfOccurences === 1 && (
                                            <>Used in 1 Stack!</>
                                          )}
                                          {x.numOfOccurences! > 1 && (
                                            <>
                                              Used in over {x.numOfOccurences}{" "}
                                              Stacks!
                                            </>
                                          )}
                                        </p>
                                      )}
                                    </div>
                                  </div>
                                  <hr />
                                  <p>{x.description}</p>
                                </div>
                              </div>
                            </a>
                          );
                        })}
                      </>
                    )}
                    {section !== "cloud" && (
                      <>
                        {x.tech.map((x, index2) => {
                          return (
                            <div
                              key={index2}
                              className="card"
                              style={{ display: "none" }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
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
                                  {x.numOfOccurences! > 0 && (
                                    <span style={{ color: "#2667ff" }}>
                                      {x.numOfOccurences === 1 && (
                                        <>&nbsp;&nbsp;Used in 1 Stack!</>
                                      )}
                                      {x.numOfOccurences! > 1 && (
                                        <>
                                          &nbsp;&nbsp;Used in over{" "}
                                          {x.numOfOccurences} Stacks!
                                        </>
                                      )}
                                    </span>
                                  )}
                                </div>
                              </div>
                              <hr />
                              <p>{x.description}</p>
                              <a
                                href={x.site}
                                target="_blank"
                                style={{
                                  display: "block",
                                  fontWeight: "600",
                                  maxWidth: "fit-content",
                                }}
                              >
                                Learn More...
                              </a>
                            </div>
                          );
                        })}
                      </>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
