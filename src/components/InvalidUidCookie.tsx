import { useEffect } from "react";

export default function InvalidCookie({
  redirectUrl,
}: {
  redirectUrl: string;
}) {
  useEffect(() => {
    document.cookie = "uid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.assign(redirectUrl);
  }, []);

  return <>nono</>;
}
