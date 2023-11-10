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
          <b>Connect your GitHub account in profile settings to showcase commit
            logs from your repositories.</b>
        </p>
      )}
      {repoData === "error" && (
        <p><b>There was an error while fetching GitHub repo data.</b></p>
      )}
      {repoData === null && <p><b>No repo data available.</b></p>}
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
