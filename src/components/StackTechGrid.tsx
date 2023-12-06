/* eslint-disable @next/next/no-img-element */
import { Stack } from "@/models/stacks";

export default function TechGrid({ stackDetails }: { stackDetails: Stack }) {
  return (
    <section>
      {/* MOBILE LAYOUT */}
      <div className="card-container" id="mobile">
        <div className="card">
          <div className="container">
            <p
              className="subtitle"
              style={{ opacity: "0.6", textAlign: "center" }}
            >
              LANGUAGES
            </p>
            <hr />
            <div className="grid-container">
              <div className="grid-container">
                {stackDetails.languages_used.map((x: string, index: number) => {
                  return (
                    <a key={index} href={`/tech?type=language`}>
                      <div className="grid-item">
                        <img src={`/imgs/tech/${x}.svg`} alt={`${x} logo`} />
                        <span>
                          <p
                            style={{
                              textAlign: "center",
                              fontSize: "12px",
                              fontWeight: "600",
                            }}
                          >
                            {x}
                          </p>
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {stackDetails.databases_used !== null && (
            <div className="container">
              <p
                className="subtitle"
                style={{
                  marginTop: "1rem",
                  opacity: "0.6",
                  textAlign: "center",
                }}
              >
                DATABASES
              </p>
              <hr />
              <div className="grid-container">
                <div className="grid-container">
                  {stackDetails.databases_used.map(
                    (x: string, index: number) => {
                      return (
                        <a href={`/tech?type=database`} key={index}>
                          <div className="grid-item">
                            <img
                              src={`/imgs/tech/${x}.svg`}
                              alt={`${x} logo`}
                            />
                            <span>
                              <p
                                style={{
                                  textAlign: "center",
                                  fontSize: "12px",
                                  fontWeight: "600",
                                }}
                              >
                                {x}
                              </p>
                            </span>
                          </div>
                        </a>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          )}

          {stackDetails.apis_used !== null && (
            <div className="container">
              <p
                className="subtitle"
                style={{
                  marginTop: "1rem",
                  opacity: "0.6",
                  textAlign: "center",
                }}
              >
                APIs
              </p>
              <hr />
              <div className="grid-container">
                <div className="grid-container">
                  {stackDetails.apis_used.map((x: string, index: number) => {
                    return (
                      <a href={`/tech?type=api`} key={index}>
                        <div className="grid-item">
                          <img src={`/imgs/tech/${x}.svg`} alt={`${x} logo`} />
                          <span>
                            <p
                              style={{
                                textAlign: "center",
                                fontSize: "12px",
                                fontWeight: "600",
                              }}
                            >
                              {x}
                            </p>
                          </span>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {stackDetails.frameworks_used !== null && (
            <div className="container">
              <p
                className="subtitle"
                style={{
                  marginTop: "1rem",
                  opacity: "0.6",
                  textAlign: "center",
                }}
              >
                FRAMEWORKS
              </p>
              <hr />
              <div className="grid-container">
                <div className="grid-container">
                  {stackDetails.frameworks_used.map(
                    (x: string, index: number) => {
                      return (
                        <a href={`/tech?type=framework`} key={index}>
                          <div className="grid-item">
                            <img
                              src={`/imgs/tech/${x}.svg`}
                              alt={`${x} logo`}
                            />
                            <span>
                              <p
                                style={{
                                  textAlign: "center",
                                  fontSize: "12px",
                                  fontWeight: "600",
                                }}
                              >
                                {x}
                              </p>
                            </span>
                          </div>
                        </a>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          )}

          {stackDetails.clouds_used !== null && (
            <div className="container">
              <p
                className="subtitle"
                style={{
                  marginTop: "1rem",
                  opacity: "0.6",
                  textAlign: "center",
                }}
              >
                CLOUDS
              </p>
              <hr />
              <div className="grid-container">
                <div className="grid-container">
                  {stackDetails.clouds_used.map((x: string, index: number) => {
                    return (
                      <a href={`/tech?type=cloud`} key={index}>
                        <div className="grid-item">
                          <img src={`/imgs/tech/${x}.svg`} alt={`${x} logo`} />
                          <span>
                            <p
                              style={{
                                textAlign: "center",
                                fontSize: "12px",
                                fontWeight: "600",
                              }}
                            >
                              {x}
                            </p>
                          </span>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* DESKTOP LAYOUT */}
      <div className="card-container" id="desktop">
        <div
          className="card"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div className="grid-container">
            <div
              className="grid-item"
              style={{ width: "20%", height: "fit-content", marginBottom: "0" }}
            >
              <p
                className="subtitle"
                style={{ opacity: "0.6", textAlign: "center" }}
              >
                LANGUAGES
              </p>
              <hr />
            </div>

            <div
              className="grid-item"
              style={{
                width: "20%",
                height: "fit-content",
                marginBottom: "0",
              }}
            >
              <p
                className="subtitle"
                style={{ opacity: "0.6", textAlign: "center" }}
              >
                DATABASES
              </p>
              <hr />
            </div>

            <div
              className="grid-item"
              style={{
                width: "20%",
                height: "fit-content",
                marginBottom: "0",
              }}
            >
              <p
                className="subtitle"
                style={{ opacity: "0.6", textAlign: "center" }}
              >
                APIs
              </p>
              <hr />
            </div>

            <div
              className="grid-item"
              style={{
                width: "20%",
                height: "fit-content",
                marginBottom: "0",
              }}
            >
              <p
                className="subtitle"
                style={{ opacity: "0.6", textAlign: "center" }}
              >
                FRAMEWORKS
              </p>
              <hr />
            </div>

            <div
              className="grid-item"
              style={{
                width: "20%",
                height: "fit-content",
                marginBottom: "0",
              }}
            >
              <p
                className="subtitle"
                style={{ opacity: "0.6", textAlign: "center" }}
              >
                CLOUD SERVICES
              </p>
              <hr />
            </div>
          </div>

          <div style={{ display: "flex", width: "100%" }}>
            <div
              className="grid-container"
              style={{
                display: "flex",
                gap: "0",
                padding: "0",
                maxWidth: "20%",
              }}
            >
              {stackDetails.languages_used.map((x: string, index: number) => {
                return (
                  <a key={index} href={`/tech?type=language`}>
                    <div className="grid-item">
                      <img src={`/imgs/tech/${x}.svg`} alt={`${x} logo`} />
                      <span>
                        <p
                          style={{
                            textAlign: "center",
                            fontSize: "12px",
                            fontWeight: "600",
                          }}
                        >
                          {x}
                        </p>
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>

            {stackDetails.databases_used !== null && (
              <div
                className="grid-container"
                style={{
                  display: "flex",
                  gap: "0",
                  padding: "0",
                  maxWidth: "20%",
                }}
              >
                {stackDetails.databases_used.map((x: string, index: number) => {
                  return (
                    <a href={`/tech?type=database`} key={index}>
                      <div className="grid-item">
                        <img src={`/imgs/tech/${x}.svg`} alt={`${x} logo`} />
                        <span>
                          <p
                            style={{
                              textAlign: "center",
                              fontSize: "12px",
                              fontWeight: "600",
                            }}
                          >
                            {x}
                          </p>
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>
            )}
            {stackDetails.databases_used === null && (
              <div
                className="grid-container"
                style={{
                  display: "flex",
                  gap: "0",
                  padding: "0",
                  maxWidth: "20%",
                }}
              >
                <></>
              </div>
            )}

            {stackDetails.apis_used !== null && (
              <div
                className="grid-container"
                style={{
                  display: "flex",
                  gap: "0",
                  padding: "0",
                  maxWidth: "20%",
                }}
              >
                {stackDetails.apis_used.map((x: string, index: number) => {
                  return (
                    <a href={`/tech?type=api`} key={index}>
                      <div className="grid-item">
                        <img src={`/imgs/tech/${x}.svg`} alt={`${x} logo`} />
                        <span>
                          <p
                            style={{
                              textAlign: "center",
                              fontSize: "12px",
                              fontWeight: "600",
                            }}
                          >
                            {x}
                          </p>
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>
            )}
            {stackDetails.apis_used === null && (
              <div
                className="grid-container"
                style={{
                  display: "flex",
                  gap: "0",
                  padding: "0",
                  maxWidth: "20%",
                }}
              >
                <></>
              </div>
            )}

            {stackDetails.frameworks_used !== null && (
              <div
                className="grid-container"
                style={{
                  display: "flex",
                  gap: "0",
                  padding: "0",
                  maxWidth: "20%",
                }}
              >
                {stackDetails.frameworks_used.map(
                  (x: string, index: number) => {
                    return (
                      <a href={`/tech?type=framework`} key={index}>
                        <div className="grid-item">
                          <img src={`/imgs/tech/${x}.svg`} alt={`${x} logo`} />
                          <span>
                            <p
                              style={{
                                textAlign: "center",
                                fontSize: "12px",
                                fontWeight: "600",
                              }}
                            >
                              {x}
                            </p>
                          </span>
                        </div>
                      </a>
                    );
                  }
                )}
              </div>
            )}
            {stackDetails.frameworks_used === null && (
              <div
                className="grid-container"
                style={{
                  display: "flex",
                  gap: "0",
                  padding: "0",
                  maxWidth: "20%",
                }}
              >
                <></>
              </div>
            )}

            {stackDetails.clouds_used !== null && (
              <div
                className="grid-container"
                style={{
                  display: "flex",
                  gap: "0",
                  padding: "0",
                  maxWidth: "20%",
                }}
              >
                {stackDetails.clouds_used.map((x: string, index: number) => {
                  return (
                    <a href={`/tech?type=cloud`} key={index}>
                      <div className="grid-item">
                        <img src={`/imgs/tech/${x}.svg`} alt={`${x} logo`} />
                        <span>
                          <p
                            style={{
                              textAlign: "center",
                              fontSize: "12px",
                              fontWeight: "600",
                            }}
                          >
                            {x}
                          </p>
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>
            )}
            {stackDetails.clouds_used === null && (
              <div
                className="grid-container"
                style={{
                  display: "flex",
                  gap: "0",
                  padding: "0",
                  maxWidth: "20%",
                }}
              >
                <></>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
