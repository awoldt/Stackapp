/* eslint-disable @next/next/no-img-element */
import { Stack } from "@/models/stacks";

export default function TechGrid({ stackDetails }: { stackDetails: Stack }) {
  return (
    <section>
      <div className="card-container">
        <div className="card">
          <div className="container">
            <h2 className="subheading" style={{ opacity: "0.6", fontSize: "16px" }}>
              <img
                src="/imgs/icons/code.svg"
                alt="language"
                width={20}
                height={14}
                style={{ display: "inline" }}
              />LANGUAGES
            </h2>
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
              <h2 className="subheading" style={{ opacity: "0.6", marginTop: "40px", fontSize: "16px" }}>
                <img
                  src="/imgs/icons/database-fill.svg"
                  alt="database"
                  width={20}
                  height={14}
                  style={{ display: "inline" }}
                />DATABASES
              </h2>
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
              <h2 className="subheading" style={{ opacity: "0.6", marginTop: "40px", fontSize: "16px" }}>
                <img
                  src="/imgs/icons/api.svg"
                  alt="api"
                  width={20}
                  height={14}
                  style={{ display: "inline" }}
                />APIs
              </h2>
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
              <h2 className="subheading" style={{ opacity: "0.6", marginTop: "40px", fontSize: "16px" }}>
                <img
                  src="/imgs/icons/framework.svg"
                  alt="api"
                  width={20}
                  height={14}
                  style={{ display: "inline" }}
                />FRAMEWORKS
              </h2>
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
              <h2 className="subheading" style={{ opacity: "0.6", marginTop: "40px", fontSize: "16px" }}>
                <img
                  src="/imgs/icons/cloud-fill.svg"
                  alt="cloud"
                  width={20}
                  height={14}
                  style={{ display: "inline" }}
                />CLOUDS
              </h2>
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
