import { useRef, useState } from "react";

export default function StackDesctiptionTextarea({
  defaultText, //if not defined, prefill textarea with stack description (edit stack page only)

  //both setAllFormFieldData & allFormFieldData are only needed for create page
  setAllFormFieldData,
  allFormFieldData,
}: {
  defaultText?: string;
  setAllFormFieldData?: React.Dispatch<React.SetStateAction<any>>;
  allFormFieldData?: any;
}) {
  const [wordCount, setWordCount] = useState(
    defaultText === undefined ? 0 : defaultText.length
  );
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <>
      {defaultText === undefined && (
        <textarea
          ref={textareaRef}
          name="app_description"
          id="app_description"
          cols={40}
          rows={10}
          required
          style={{ marginBottom: "0px" }}
          placeholder="*Stack Description"
          maxLength={2500}
          onChange={(e) => {
            setWordCount(textareaRef.current!.value.length!);

            //will prevent error from being thrown on edit stack page
            //the setState functions below are only needed on create page
            if (allFormFieldData !== undefined) {
              if (e.target.value === "") {
                setAllFormFieldData!({
                  ...allFormFieldData,
                  appDescription: false,
                });
              } else {
                if (!allFormFieldData.appDescription) {
                  setAllFormFieldData!({
                    ...allFormFieldData,
                    appDescription: true,
                  });
                }
              }
            }
          }}
        ></textarea>
      )}
      {defaultText !== undefined && (
        <textarea
          ref={textareaRef}
          name="app_description"
          id="app_description"
          cols={40}
          rows={10}
          required
          style={{ marginBottom: "0px" }}
          defaultValue={defaultText}
          maxLength={2500}
          onChange={(e) => {
            setWordCount(textareaRef.current!.value.length!);

            //will prevent error from being thrown on edit stack page
            //the setState functions below are only needed on create page
            if (allFormFieldData !== undefined) {
              if (e.target.value === "") {
                setAllFormFieldData!({
                  ...allFormFieldData,
                  appDescription: false,
                });
              } else {
                if (!allFormFieldData.appDescription) {
                  setAllFormFieldData!({
                    ...allFormFieldData,
                    appDescription: true,
                  });
                }
              }
            }
          }}
        ></textarea>
      )}
      <span style={{ fontSize: "16px", opacity: "0.85" }}>
        {wordCount} / 2500
      </span>
    </>
  );
}
