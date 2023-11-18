import { RepoCommitLogs } from "@/functions";

export default function CommitLogs({
  commitLogs,
  repoName,
}: {
  commitLogs: null | "error" | RepoCommitLogs[] | "too_many_requests";
  repoName: string | null;
}) {
  return (
    <>
      {commitLogs !== null && Array.isArray(commitLogs) && (
        <section>
          <div className="card-container">
            <div className="card">
            <p style={{ opacity: "0.4" }}>GITHUB</p>
                <hr />
                <p>Repo pushed [Month] [Day], [Year].</p>
              {/* <span style={{ fontSize: "50px" }}>
                <b>
                  <i>{repoName}</i>
                </b>
              </span> */}
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
