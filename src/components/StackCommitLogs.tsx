import { RepoCommitLogs } from "@/functions";

export default function CommitLogs({
  commitLogs,
}: {
  commitLogs: null | "error" | RepoCommitLogs[] | "too_many_requests";
}) {
  return (
    <>
      {commitLogs !== null && Array.isArray(commitLogs) && (
        <section>
          <div className="card-container">
            <div className="card">
              <h2 style={{ textAlign: "center" }}>Github</h2>
              <p
                className="subtitle"
                style={{ textAlign: "center", marginBottom: "20px" }}
              >
                Commit history towards the development of this tech Stack.
              </p>
              {commitLogs.map((x: RepoCommitLogs) => {
                return (
                  <>
                    <p
                      style={{
                        marginTop: "20px",
                        fontSize: "16px",
                        opacity: "0.85",
                      }}
                    >
                      {x.date_commited}
                    </p>
                    <p>
                      <b>MSG: {x.message} </b>
                    </p>
                    <p>
                      Github Commit SHA:{" "}
                      <em>
                        <a href={x.url}>{x.sha}</a>
                      </em>
                    </p>
                  </>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
