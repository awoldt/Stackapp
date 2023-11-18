/* eslint-disable @next/next/no-img-element */
import { TechOffered } from "@/techOffered";

export default function Tech() {
  return (
    <>
      <div className="tech-select-div">
        <img
          src="/imgs/icons/code.svg"
          alt="language"
          width={20}
          height={15}
          style={{ display: "inline" }}
        />
        <h5
          style={{ display: "inline", marginTop: "10px" }}
        >
          Select all Languages used in your tech stack.
        </h5>
        {TechOffered.languages.map((x) => {
          return (
            <>
              <label>
                <input type="checkbox" name="languages_used" value={x} />
                <span className="checkmark"></span>
                {x}
              </label>
            </>
          );
        })}
      </div>

      <div className="tech-select-div">
        <img
          src="/imgs/icons/database-fill.svg"
          alt="database"
          width={20}
          height={15}
          style={{ display: "inline" }}
        />
        <h5 style={{ display: "inline" }}>
          Select all Databases used in your tech stack.
        </h5>
        {TechOffered.databases!.map((x) => {
          return (
            <>
              <label>
                <input type="checkbox" name="databases_used" value={x} />
                <span className="checkmark"></span>
                {x}
              </label>
            </>
          );
        })}
      </div>

      <div className="tech-select-div">
        <img
          src="/imgs/icons/api.svg"
          alt="api"
          width={20}
          height={15}
          style={{ display: "inline" }}
        />
        <h5 style={{ display: "inline" }}>
          Select all APIs used in your tech stack.
        </h5>
        {TechOffered.apis!.map((x) => {
          return (
            <>
              <label>
                <input type="checkbox" name="apis_used" value={x} />
                <span className="checkmark"></span>
                {x}
              </label>
            </>
          );
        })}
      </div>

      <div className="tech-select-div">
        <img
          src="/imgs/icons/framework.svg"
          alt="api"
          width={20}
          height={15}
          style={{ display: "inline" }}
        />
        <h5 style={{ display: "inline" }}>
          Select all Frameworks used in your tech stack.
        </h5>
        {TechOffered.frameworks!.map((x) => {
          return (
            <>
              <label>
                <input type="checkbox" name="frameworks_used" value={x} />
                <span className="checkmark"></span>
                {x}
              </label>
            </>
          );
        })}
      </div>

      <div className="tech-select-div">
        <img
          src="/imgs/icons/cloud-fill.svg"
          alt="cloud"
          width={20}
          height={15}
          style={{ display: "inline" }}
        />
        <h5 style={{ display: "inline" }}>
          Select all Cloud Deployment Services used in your tech stack.
        </h5>
        {TechOffered.clouds!.map((x) => {
          return (
            <>
              <label>
                <input type="checkbox" name="clouds_used" value={x} />
                <span className="checkmark"></span>
                {x}
              </label>
            </>
          );
        })}
      </div>
    </>
  );
}
