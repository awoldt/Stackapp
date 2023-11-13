import { RepoSelectList } from "@/functions";

export default function Select({
  repoData,
}: {
  repoData: RepoSelectList[] | null | "must_connect_github_account" | "error";
}) {
  return (
    <div>
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
          <b>No repo data available or all repos are associated with other Stacks.</b>
          <br />
          <br />
        </p>
      )}
      {Array.isArray(repoData) && repoData.length > 0 && (
        <>
          <label style={{ padding: "0" }} htmlFor="github_repo_select">
            <span> GitHub Repository</span>
          </label>
          <select name="github_repo_id" id="github_repo_select">
            <option value="">Select a Repo</option>
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
