import { RepoSelectList } from "@/functions";

export default function Select({
  repoData,
}: {
  repoData: RepoSelectList[] | null | "must_connect_github_account" | "error";
}) {
  return (
    <div style={{ marginTop: "25px", marginBottom: "25px" }}>
      {repoData === "must_connect_github_account" && (
        <p>
          Connect your GitHub account in profile settings to showcase commit
          logs from your repositories on this Stack
        </p>
      )}
      {repoData === "error" && (
        <p>There was an error while fetching GitHub repo data</p>
      )}
      {repoData === null && <p>There is no repo data to show</p>}
      {Array.isArray(repoData) && repoData.length > 0 && (
        <select name="github_repo_id">
          <option value="none">Select GitHub Repo</option>
          {repoData.map((x: RepoSelectList, index: number) => {
            return (
              <option key={index} value={x.id}>
                {x.name}
              </option>
            );
          })}
        </select>
      )}
    </div>
  );
}
