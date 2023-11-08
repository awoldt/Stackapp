/* eslint-disable @next/next/no-img-element */
import { Stack } from "@/models/stacks";

export default function TechGrid({ stackDetails }: { stackDetails: Stack }) {
  return (
    <section>
      <div className="card-container" style={{ paddingBottom: "40px" }}>
        <div className="card">
          <div className="container">
            <h3>
              Languages
            </h3>
            <div className="grid-container">
              <div className="grid-container">
                {stackDetails.languages_used.map((x: string, index: number) => {
                  return (
                    <div
                      className="grid-item"
                      key={index}
                      style={{
                        marginBottom: "40px",
                      }}
                    >
                      <img src={`/imgs/tech/${x}.svg`} alt={`${x} logo`} />
                      <span>
                        <p
                          style={{
                            paddingTop: "14px",
                            textAlign: "center",
                          }}
                        >
                          {x}
                        </p>
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {stackDetails.databases_used !== null && (
            <div className="container">
              <h3>
                Databases
              </h3>
              <div className="grid-container">
                <div
                  className="grid-container"
                >
                  {stackDetails.databases_used.map(
                    (x: string, index: number) => {
                      return (
                        <div
                          className="grid-item"
                          key={index}
                          style={{
                            marginBottom: "40px",
                          }}
                        >
                          <img src={`/imgs/tech/${x}.svg`} alt={`${x} logo`} />
                          <span>
                            <p
                              style={{
                                paddingTop: "14px",
                                textAlign: "center",
                              }}
                            >
                              {x}
                            </p>
                          </span>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          )}

          {stackDetails.apis_used !== null && (
            <div className="container">
              <h3>
                APIs
              </h3>
              <div className="grid-container">
                <div
                  className="grid-container"
                >
                  {stackDetails.apis_used.map((x: string, index: number) => {
                    return (
                      <div
                        className="grid-item"
                        key={index}
                        style={{
                          marginBottom: "40px",
                        }}
                      >
                        <img src={`/imgs/tech/${x}.svg`} alt={`${x} logo`} />
                        <span>
                          <p
                            style={{
                              paddingTop: "14px",
                              textAlign: "center",
                            }}
                          >
                            {x}
                          </p>
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {stackDetails.frameworks_used !== null && (
            <div className="container">
              <h3>
                Frameworks
              </h3>
              <div className="grid-container">
                <div
                  className="grid-container"
                >
                  {stackDetails.frameworks_used.map(
                    (x: string, index: number) => {
                      return (
                        <div
                          className="grid-item"
                          key={index}
                          style={{
                            marginBottom: "40px",
                          }}
                        >
                          <img src={`/imgs/tech/${x}.svg`} alt={`${x} logo`} />
                          <span>
                            <p
                              style={{
                                paddingTop: "14px",
                                textAlign: "center",
                              }}
                            >
                              {x}
                            </p>
                          </span>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          )}

          {stackDetails.clouds_used !== null && (
            <div className="container">
              <h3>
                Clouds
              </h3>
              <div className="grid-container">
                <div
                  className="grid-container"
                >
                  {stackDetails.clouds_used.map((x: string, index: number) => {
                    return (
                      <div
                        className="grid-item"
                        key={index}
                        style={{
                          marginBottom: "40px",
                        }}
                      >
                        <img src={`/imgs/tech/${x}.svg`} alt={`${x} logo`} />
                        <span>
                          <p
                            style={{
                              paddingTop: "14px",
                              textAlign: "center",
                            }}
                          >
                            {x}
                          </p>
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
