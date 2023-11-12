import { RepoSelectList } from "@/functions";

export default function Select({
  repoData,
}: {
  repoData: RepoSelectList[] | null | "must_connect_github_account" | "error";
}) {
  return (
    <div style={{ marginTop: "0px", marginBottom: "20px" }}>
      {repoData === "must_connect_github_account" && (
        <p>
          <b>
            Connect your GitHub account in profile settings to showcase commit
            logs from your repositories.
          </b>
        </p>
      )}
      {repoData === "error" && (
        <p>
          <b>There was an error while fetching GitHub repo data.</b>
        </p>
      )}
      {repoData === null && (
        <p>
          <b>No repo data available.</b>
        </p>
      )}
      {Array.isArray(repoData) && repoData.length > 0 && (
        <>
          <label style={{ marginBottom: "0px" }} htmlFor="github_repo_select">
            <img src="/imgs/icons/github.svg" alt="github icon" />
            <span style={{ marginLeft: "5px" }}>Select GitHub repository</span>
          </label>
          <select name="github_repo_id" id="github_repo_select">
            <option value="none"></option>
            {repoData.map((x: RepoSelectList, index: number) => {
              return (
                <option key={index} value={`${x.id}:${x.name}`}>
                  {x.name}
                </option>
              );
            })}
          </select>
        </>
      )}
    </div>
  );
}
