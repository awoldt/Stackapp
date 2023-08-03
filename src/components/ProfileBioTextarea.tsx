import { useRef, useState } from "react";

export default function ProfileBio({
  defaultText, //if not defined, prefill textarea with stack description (edit stack page only)
}: {
  defaultText?: string | null;
}) {
  const [wordCount, setWordCount] = useState(
    defaultText === null ? 0 : defaultText!.length
  );
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <>
      {defaultText === null && (
        <textarea
          ref={textareaRef}
          name="profile_bio"
          cols={40}
          rows={10}
          style={{ marginBottom: "0px" }}
          placeholder="Profile Bio"
          maxLength={500}
          onChange={(e) => {
            setWordCount(textareaRef.current!.value.length!);
          }}
        ></textarea>
      )}
      {defaultText !== null && (
        <textarea
          ref={textareaRef}
          name="profile_bio"
          cols={40}
          rows={10}
          style={{ marginBottom: "0px" }}
          defaultValue={defaultText}
          maxLength={500}
          onChange={(e) => {
            setWordCount(textareaRef.current!.value.length!);
          }}
        ></textarea>
      )}
      <span style={{ fontSize: "16px", opacity: "0.85" }}>
        {wordCount} / 500
      </span>
    </>
  );
}
