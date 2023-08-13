import { _editStackData, _techStackValues } from "@/types";

export default function StackCheckboxs({
  savedStackData,
  techValues,
}: {
  savedStackData: _editStackData | null;
  techValues: _techStackValues;
}) {
  return (
    <>
      <br />
      <img
        src="/icons/code.svg"
        alt="language"
        width={20}
        height={15}
        style={{ display: "inline" }}
      />
      <p className="subtitle" style={{ display: "inline" }}>
        Languages used in your tech stack.
      </p>
      {savedStackData!.languagesSelectedData[0].map(
        (x: string, index: number) => {
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
        }
      )}
      {savedStackData!.languagesSelectedData[1].map(
        (x: string, index: number) => {
          return (
            <label htmlFor={x} key={index}>
              <input
                type="checkbox"
                id={x}
                name="languages_used"
                value={x}
                className="language-checkboxs"
              />
              <span className="checkmark"></span>
              {x}
            </label>
          );
        }
      )}

      {savedStackData!.databasesSelectedData !== null && (
        <>
          <br />
          <img
            src="/icons/database-fill.svg"
            alt="database"
            width={20}
            height={15}
            style={{ display: "inline" }}
          />
          <p className="subtitle" style={{ display: "inline" }}>
            Databases used in your tech stack.
          </p>
          {savedStackData!.databasesSelectedData[0].map(
            (x: string, index: number) => {
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
            }
          )}
          {savedStackData!.databasesSelectedData[1].map(
            (x: string, index: number) => {
              return (
                <label htmlFor={x} key={index}>
                  <input
                    type="checkbox"
                    id={x}
                    name="databases_used"
                    value={x}
                    className="database-checkboxs"
                  />
                  <span className="checkmark"></span>
                  {x}
                </label>
              );
            }
          )}
        </>
      )}
      {savedStackData!.databasesSelectedData === null && (
        <>
          <br />
          <img
            src="/icons/database-fill.svg"
            alt="database"
            width={20}
            height={15}
            style={{ display: "inline" }}
          />
          <p className="subtitle" style={{ display: "inline" }}>
            Databases used in your tech stack.
          </p>
          {techValues.databases.map((x: string, index: number) => {
            return (
              <label htmlFor={x} key={index}>
                <input
                  type="checkbox"
                  id={x}
                  name="databases_used"
                  value={x}
                  className="database-checkboxs"
                />
                <span className="checkmark"></span>
                {x}
              </label>
            );
          })}
        </>
      )}

      {savedStackData!.apisSelectedData !== null && (
        <>
          <br />
          <img
            src="/icons/api.svg"
            alt="api"
            width={20}
            height={15}
            style={{ display: "inline" }}
          />
          <p className="subtitle" style={{ display: "inline" }}>
            APIs used in your tech stack.
          </p>
          {savedStackData!.apisSelectedData[0].map(
            (x: string, index: number) => {
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
            }
          )}
          {savedStackData!.apisSelectedData[1].map(
            (x: string, index: number) => {
              return (
                <label htmlFor={x} key={index}>
                  <input
                    type="checkbox"
                    id={x}
                    name="apis_used"
                    value={x}
                    className="api-checkboxs"
                  />
                  <span className="checkmark"></span>
                  {x}
                </label>
              );
            }
          )}
        </>
      )}
      {savedStackData!.apisSelectedData === null && (
        <>
          <br />
          <img
            src="/icons/api.svg"
            alt="api"
            width={20}
            height={15}
            style={{ display: "inline" }}
          />
          <p className="subtitle" style={{ display: "inline" }}>
            APIs used in your tech stack.
          </p>
          {techValues.apis.map((x: string, index: number) => {
            return (
              <label htmlFor={x} key={index}>
                <input
                  type="checkbox"
                  id={x}
                  name="apis_used"
                  value={x}
                  className="api-checkboxs"
                />
                <span className="checkmark"></span>
                {x}
              </label>
            );
          })}
        </>
      )}

      {savedStackData!.cloudsSelectedData !== null && (
        <>
          <br />
          <img
            src="/icons/cloud-fill.svg"
            alt="cloud"
            width={20}
            height={15}
            style={{ display: "inline" }}
          />
          <p className="subtitle" style={{ display: "inline" }}>
            Cloud Deployment Services used in your tech stack.
          </p>
          {savedStackData!.cloudsSelectedData[0].map(
            (x: string, index: number) => {
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
            }
          )}
          {savedStackData!.cloudsSelectedData[1].map(
            (x: string, index: number) => {
              return (
                <label htmlFor={x} key={index}>
                  <input
                    type="checkbox"
                    id={x}
                    name="clouds_used"
                    value={x}
                    className="cloud-checkboxs"
                  />
                  <span className="checkmark"></span>
                  {x}
                </label>
              );
            }
          )}
        </>
      )}
      {savedStackData!.cloudsSelectedData === null && (
        <>
          <br />
          <img
            src="/icons/cloud-fill.svg"
            alt="cloud"
            width={20}
            height={15}
            style={{ display: "inline" }}
          />
          <p className="subtitle" style={{ display: "inline" }}>
            Cloud Deployment Services used in your tech stack.
          </p>
          {techValues.clouds.map((x: string, index: number) => {
            return (
              <label htmlFor={x} key={index}>
                <input
                  type="checkbox"
                  id={x}
                  name="clouds_used"
                  value={x}
                  className="cloud-checkboxs"
                />
                <span className="checkmark"></span>
                {x}
              </label>
            );
          })}
        </>
      )}

      {savedStackData!.frameworksSelectedData !== null && (
        <>
          <br />
          <img
            src="/icons/framework.svg"
            alt="api"
            width={20}
            height={15}
            style={{ display: "inline" }}
          />
          <p className="subtitle" style={{ display: "inline" }}>
            Frameworks used in your tech stack.
          </p>
          {savedStackData!.frameworksSelectedData[0].map(
            (x: string, index: number) => {
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
            }
          )}
          {savedStackData!.frameworksSelectedData[1].map(
            (x: string, index: number) => {
              return (
                <label htmlFor={x} key={index}>
                  <input
                    type="checkbox"
                    id={x}
                    name="frameworks_used"
                    value={x}
                    className="framework-checkboxs"
                  />
                  <span className="checkmark"></span>
                  {x}
                </label>
              );
            }
          )}
        </>
      )}

      {savedStackData!.frameworksSelectedData === null && (
        <>
          <br />
          <img
            src="/icons/framework.svg"
            alt="api"
            width={20}
            height={15}
            style={{ display: "inline" }}
          />
          <p className="subtitle" style={{ display: "inline" }}>
            Frameworks used in your tech stack.
          </p>
          {techValues.frameworks.map((x: string, index: number) => {
            return (
              <label htmlFor={x} key={index}>
                <input
                  type="checkbox"
                  id={x}
                  name="frameworks_used"
                  value={x}
                />
                <span className="checkmark"></span>
                {x}
              </label>
            );
          })}
        </>
      )}
    </>
  );
}
