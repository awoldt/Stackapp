"use client";

import { TechList } from "@/functions";
import { useState } from "react";

export default function TechList({
  sortedTechList,
}: {
  sortedTechList: TechList[];
}) {
  const [section, setSection] = useState<
    "language" | "database" | "api" | "cloud" | "framework"
  >("language");

  return (
    <>
      <div className="card-container">
        <div
          className="card-blank"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
            marginBottom: "20px",
          }}
        >
          <span
            className={section === "language" ? "btn-selected" : "btn"}
            style={{
              marginLeft: ".2rem",
              marginRight: ".2rem",
            }}
            onClick={() => {
              if (section !== "language") {
                setSection("language");
              }
            }}
          >
            {/* <img
              className="svg-white"
              src="/imgs/icons/code.svg"
              alt="language"
              width={20}
              height={14}
            /> */}
            Languages
          </span>

          <span
            className={section === "database" ? "btn-selected" : "btn"}
            style={{
              marginLeft: ".2rem",
              marginRight: ".2rem",
            }}
            onClick={() => {
              if (section !== "database") {
                setSection("database");
              }
            }}
          >
            {/* <img
              className="svg-white"
              src="/imgs/icons/database-fill.svg"
              alt="database"
              width={20}
              height={14}
            /> */}
            Databases
          </span>

          <span
            className={section === "api" ? "btn-selected" : "btn"}
            style={{
              marginLeft: ".2rem",
              marginRight: ".2rem",
            }}
            onClick={() => {
              if (section !== "api") {
                setSection("api");
              }
            }}
          >
            {/* <img
              className="svg-white"
              src="/imgs/icons/api.svg"
              alt="api"
              width={20}
              height={14}
            /> */}
            APIs
          </span>

          <span
            className={section === "framework" ? "btn-selected" : "btn"}
            style={{
              marginLeft: ".2rem",
              marginRight: ".2rem",
            }}
            onClick={() => {
              if (section !== "framework") {
                setSection("framework");
              }
            }}
          >
            {/* <img
              className="svg-white"
              src="/imgs/icons/framework.svg"
              alt="api"
              width={20}
              height={14}
            /> */}
            Frameworks
          </span>

          <span
            className={section === "cloud" ? "btn-selected" : "btn"}
            style={{
              marginLeft: ".2rem",
              marginRight: ".2rem",
            }}
            onClick={() => {
              if (section !== "cloud") {
                setSection("cloud");
              }
            }}
          >
            {/* <img
              className="svg-white"
              src="/imgs/icons/cloud-fill.svg"
              alt="cloud"
              width={20}
              height={14}
            /> */}
            Clouds
          </span>
        </div>
      </div>

      <div className="card-container">
        <div className="card-blank">
          {sortedTechList.map((x) => {
            return (
              <>
                {/* LANGUAGES */}
                {x._id === "language" && (
                  <>
                    {section === "language" && (
                      <>
                        {x.tech.map((x, index) => {
                          return (
                            <div
                              key={index}
                              className="card"
                              style={{ width: "100%", marginBottom: "1rem" }}
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
                                className="nav-element"
                                href={x.site}
                                target="_blank"
                                style={{
                                  display: "block",
                                  marginTop: "20px",
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
                    {section !== "language" && (
                      <>
                        {x.tech.map((x, index) => {
                          return (
                            <div
                              key={index}
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
                                className="nav-element"
                                href={x.site}
                                target="_blank"
                                style={{
                                  display: "block",
                                  marginTop: "20px",
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
                        {x.tech.map((x, index) => {
                          return (
                            <div
                              key={index}
                              className="card"
                              style={{ width: "100%", marginBottom: "1rem" }}
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
                                className="nav-element"
                                href={x.site}
                                target="_blank"
                                style={{
                                  display: "block",
                                  marginTop: "20px",
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
                    {section !== "database" && (
                      <>
                        {x.tech.map((x, index) => {
                          return (
                            <div
                              key={index}
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
                                className="nav-element"
                                href={x.site}
                                target="_blank"
                                style={{
                                  display: "block",
                                  marginTop: "20px",
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
                        {x.tech.map((x, index) => {
                          return (
                            <div
                              key={index}
                              className="card"
                              style={{ width: "100%", marginBottom: "1rem" }}
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
                                className="nav-element"
                                href={x.site}
                                target="_blank"
                                style={{
                                  display: "block",
                                  marginTop: "20px",
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
                    {section !== "api" && (
                      <>
                        {x.tech.map((x, index) => {
                          return (
                            <div
                              key={index}
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
                                className="nav-element"
                                href={x.site}
                                target="_blank"
                                style={{
                                  display: "block",
                                  marginTop: "20px",
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
                        {x.tech.map((x, index) => {
                          return (
                            <div
                              key={index}
                              className="card"
                              style={{ width: "100%", marginBottom: "1rem" }}
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
                                className="nav-element"
                                href={x.site}
                                target="_blank"
                                style={{
                                  display: "block",
                                  marginTop: "20px",
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
                    {section !== "framework" && (
                      <>
                        {x.tech.map((x, index) => {
                          return (
                            <div
                              key={index}
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
                                className="nav-element"
                                href={x.site}
                                target="_blank"
                                style={{
                                  display: "block",
                                  marginTop: "20px",
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
                        {x.tech.map((x, index) => {
                          return (
                            <div
                              key={index}
                              className="card"
                              style={{ width: "100%", marginBottom: "1rem" }}
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
                                className="nav-element"
                                href={x.site}
                                target="_blank"
                                style={{
                                  display: "block",
                                  marginTop: "20px",
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
                    {section !== "cloud" && (
                      <>
                        {x.tech.map((x, index) => {
                          return (
                            <div
                              key={index}
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
                                className="nav-element"
                                href={x.site}
                                target="_blank"
                                style={{
                                  display: "block",
                                  marginTop: "20px",
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
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
