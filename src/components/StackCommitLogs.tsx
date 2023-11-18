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
              {commitLogs.map((x: RepoCommitLogs) => {
                return (
                  <>
                    <p
                      style={{
                        fontSize: "14px",
                        opacity: "0.4",
                      }}
                    >
                      {x.date_commited}
                    </p>
                    <p>
                      <b>{x.message} </b>
                    </p>
                    <p>
                      {"["}Commit Hash{"]"}:{" "}
                      <em>
                        <a className="nav-element" style={{ lineHeight: "1" }} href={x.url}>{x.sha}</a>
                      </em>
                    </p>
                    <hr />
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
