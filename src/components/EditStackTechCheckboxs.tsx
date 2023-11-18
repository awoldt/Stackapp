import { EditStackTechCheckboxs } from "@/functions";

export default function Checkboxs({
  stackData,
}: {
  stackData: EditStackTechCheckboxs;
}) {
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
        {stackData.languages.selected.map((x, index) => {
          return (
            <label htmlFor={x} key={index}>
              <input
                type="checkbox"
                id={x}
                name="languages_used"
                value={x}
                className="language-checkboxs"
                defaultChecked={true}
              />
              <span className="checkmark"></span>
              {x}
            </label>
          );
        })}
        {stackData.languages.notSelected.map((x, index) => {
          return (
            <label htmlFor={x} key={index}>
              <input
                type="checkbox"
                id={x}
                name="languages_used"
                value={x}
                className="language-checkboxs"
                defaultChecked={false}
              />
              <span className="checkmark"></span>
              {x}
            </label>
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
        {stackData.databases.selected !== null && (
          <>
            {stackData.databases.selected.map((x, index) => {
              return (
                <label htmlFor={x} key={index}>
                  <input
                    type="checkbox"
                    id={x}
                    name="databases_used"
                    value={x}
                    className="database-checkboxs"
                    defaultChecked={true}
                  />
                  <span className="checkmark"></span>
                  {x}
                </label>
              );
            })}
          </>
        )}
        {stackData.databases.notSelected.map((x, index) => {
          return (
            <label htmlFor={x} key={index}>
              <input
                type="checkbox"
                id={x}
                name="databases_used"
                value={x}
                className="database-checkboxs"
                defaultChecked={false}
              />
              <span className="checkmark"></span>
              {x}
            </label>
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
        {stackData.apis.selected !== null && (
          <>
            {stackData.apis.selected.map((x, index) => {
              return (
                <label htmlFor={x} key={index}>
                  <input
                    type="checkbox"
                    id={x}
                    name="apis_used"
                    value={x}
                    className="api-checkboxs"
                    defaultChecked={true}
                  />
                  <span className="checkmark"></span>
                  {x}
                </label>
              );
            })}
          </>
        )}
        {stackData.apis.notSelected.map((x, index) => {
          return (
            <label htmlFor={x} key={index}>
              <input
                type="checkbox"
                id={x}
                name="apis_used"
                value={x}
                className="api-checkboxs"
                defaultChecked={false}
              />
              <span className="checkmark"></span>
              {x}
            </label>
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
        {stackData.clouds.selected !== null && (
          <>
            {stackData.clouds.selected.map((x, index) => {
              return (
                <label htmlFor={x} key={index}>
                  <input
                    type="checkbox"
                    id={x}
                    name="clouds_used"
                    value={x}
                    className="cloud-checkboxs"
                    defaultChecked={true}
                  />
                  <span className="checkmark"></span>
                  {x}
                </label>
              );
            })}
          </>
        )}
        {stackData.clouds.notSelected.map((x, index) => {
          return (
            <label htmlFor={x} key={index}>
              <input
                type="checkbox"
                id={x}
                name="clouds_used"
                value={x}
                className="cloud-checkboxs"
                defaultChecked={false}
              />
              <span className="checkmark"></span>
              {x}
            </label>
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
        {stackData.frameworks.selected !== null && (
          <>
            {stackData.frameworks.selected.map((x, index) => {
              return (
                <label htmlFor={x} key={index}>
                  <input
                    type="checkbox"
                    id={x}
                    name="frameworks_used"
                    value={x}
                    className="framework-checkboxs"
                    defaultChecked={true}
                  />
                  <span className="checkmark"></span>
                  {x}
                </label>
              );
            })}
          </>
        )}
        {stackData.frameworks.notSelected.map((x, index) => {
          return (
            <label htmlFor={x} key={index}>
              <input
                type="checkbox"
                id={x}
                name="frameworks_used"
                value={x}
                className="frameworks-checkboxs"
                defaultChecked={false}
              />
              <span className="checkmark"></span>
              {x}
            </label>
          );
        })}
      </div>
    </>
  );
}
