import { useRef, useState } from "react";

export default function StackDesctiptionTextarea({
  defaultText, //if not defined, prefill textarea with stack description (edit stack page only)
}: {
  defaultText?: string;
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
          placeholder="Stack Description"
          maxLength={2500}
          onChange={(e) => {
            setWordCount(textareaRef.current!.value.length!);
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
          defaultValue={defaultText}
          maxLength={2500}
          onChange={(e) => {
            setWordCount(textareaRef.current!.value.length!);
          }}
        ></textarea>
      )}
      <span>{wordCount}/2500</span>
    </>
  );
}
