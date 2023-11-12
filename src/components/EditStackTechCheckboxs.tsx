import { EditStackTechCheckboxs } from "@/functions";

export default function Checkboxs({
  stackData,
}: {
  stackData: EditStackTechCheckboxs;
}) {
  return (
    <>
      <p>Select languages used</p>
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

      <p>Select databases used</p>
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

      <p>Select apis used</p>
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

      <p>Select clouds used</p>
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

      <p>Select frameworks used</p>
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
    </>
  );
}
