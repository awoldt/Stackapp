import { _ogMetaTags } from "@/types";
import Head from "next/head";

export default function UniqueHeader({
  title,
  description,
  canonicalLink,
  openGraph,
}: {
  title: string;
  description: string;
  canonicalLink: string;
  openGraph: _ogMetaTags | null;
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalLink} />
      {openGraph !== null && (
        <>
          <meta property="og:title" content={openGraph.title} />
          <meta property="og:url" content={openGraph.url!} />
          {openGraph.image !== null && (
            <meta property="og:image" content={openGraph.image} />
          )}
        </>
      )}
    </Head>
  );
}
