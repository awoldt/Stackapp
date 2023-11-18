/* eslint-disable @next/next/no-img-element */
import { Stack } from "@/models/stacks";

export default function TechGrid({ stackDetails }: { stackDetails: Stack }) {
  return (
    <section>
      <div className="card-container" style={{ paddingBottom: "40px" }}>
        <div className="card">
          <div className="container">
            <p style={{ opacity: "0.4" }}>
              LANGUAGES
            </p>
            <hr />
            <div className="grid-container">
              <div className="grid-container">
                {stackDetails.languages_used.map((x: string, index: number) => {
                  return (
                    <div
                      className="grid-item"
                      key={index}
                    >
                      <img src={`/imgs/tech/${x}.svg`} alt={`${x} logo`} />
                      <span>
                        <p
                          style={{
                            textAlign: "center",
                            fontSize: "14px"
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
              <p style={{ opacity: "0.4" }}>
                DATABASES
              </p>
              <hr />
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
                        >
                          <img src={`/imgs/tech/${x}.svg`} alt={`${x} logo`} />
                          <span>
                            <p
                              style={{
                                textAlign: "center",
                                fontSize: "14px"
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
              <p style={{ opacity: "0.4" }}>
                APIs
              </p>
              <hr />
              <div className="grid-container">
                <div
                  className="grid-container"
                >
                  {stackDetails.apis_used.map((x: string, index: number) => {
                    return (
                      <div
                        className="grid-item"
                        key={index}
                      >
                        <img src={`/imgs/tech/${x}.svg`} alt={`${x} logo`} />
                        <span>
                          <p
                            style={{
                              textAlign: "center",
                              fontSize: "14px"
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
              <p style={{ opacity: "0.4" }}>
                FRAMEWORKS
              </p>
              <hr />
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
                        >
                          <img src={`/imgs/tech/${x}.svg`} alt={`${x} logo`} />
                          <span>
                            <p
                              style={{
                                textAlign: "center",
                                fontSize: "14px"
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
              <p style={{ opacity: "0.4" }}>
                CLOUDS
              </p>
              <hr />
              <div className="grid-container">
                <div
                  className="grid-container"
                >
                  {stackDetails.clouds_used.map((x: string, index: number) => {
                    return (
                      <div
                        className="grid-item"
                        key={index}
                      >
                        <img src={`/imgs/tech/${x}.svg`} alt={`${x} logo`} />
                        <span>
                          <p
                            style={{
                              textAlign: "center",
                              fontSize: "14px"
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
