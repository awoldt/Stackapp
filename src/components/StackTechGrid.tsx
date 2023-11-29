/* eslint-disable @next/next/no-img-element */
import { Stack } from "@/models/stacks";

export default function TechGrid({ stackDetails }: { stackDetails: Stack }) {
  return (
    <section>
      <div className="card-container">
        <div className="card">
          <div className="container">
            <h5 style={{ opacity: "0.4", textAlign: "center" }}>
              LANGUAGES
            </h5>
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
                            fontSize: "12px",
                            fontWeight: "800"
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
              <h5 style={{ opacity: "0.4", textAlign: "center", marginTop: "20px" }}>
                DATABASES
              </h5>
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
                                fontSize: "12px",
                                fontWeight: "800"
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
              <h5 style={{ opacity: "0.4", textAlign: "center", marginTop: "20px" }}>
                APIs
              </h5>
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
                              fontSize: "12px",
                              fontWeight: "800"
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
              <h5 style={{ opacity: "0.4", textAlign: "center", marginTop: "20px" }}>
                FRAMEWORKS
              </h5>
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
                                fontSize: "12px",
                                fontWeight: "800"
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
              <h5 style={{ opacity: "0.4", textAlign: "center", marginTop: "20px" }}>
                CLOUDS
              </h5>
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
                              fontSize: "12px",
                              fontWeight: "800"
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
