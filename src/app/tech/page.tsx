/* eslint-disable @next/next/no-img-element */
import {
  IsValidAccountCookie,
  SortTechOfferedArray,
  TechList,
} from "@/functions";
import { Tech, stacksCollection, techCollection } from "@/services/mongodb";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { Stack } from "@/models/stacks";
import TechstackList from "../../components/TechList";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "The Technology Powering Your Stacks",
  description:
    "Explore a comprehensive array of programming languages, databases, APIs, cloud deployment options, and frameworks available for showcasing on your application's stack page.",
  alternates: {
    canonical: "https://stackapp.xyz/tech",
  },
  openGraph: {
    type: "website",
    url: "https://stackapp.xyz/tech",
    title: "App Stack Technologies",
    description:
      "Discover a diverse range of programming languages, databases, APIs, cloud deployment solutions, and frameworks to feature on your application's stack page.",
    siteName: "Stack",
    images: [
      {
        url: "https://stackapp.xyz/imgs/splash/image.png",
      },
    ],
  },
};

export default async function Page({ searchParams }: any) {
  const techTypeQuery = searchParams.type;
  const allStacks = (await stacksCollection.find({}).toArray()) as Stack[];

  const query = (await techCollection
    .aggregate([
      {
        $group: {
          _id: "$type",
          tech: { $push: "$$ROOT" },
        },
      },
    ])
    .toArray()) as TechList[];

  const totalTech = query.reduce(
    (accumulator, currentValue) => accumulator + currentValue.tech.length,
    0
  );

  const sortedTechList = SortTechOfferedArray(query, allStacks);

  return (
    <>
      <div className="card-container-title">
        <div className="card-empty-wide">
          <h1>Technologies</h1>
          <p className="subheading">
            At Stack, we offer a diverse range of more than {totalTech}{" "}
            technologies, all accessible for demonstrating the construction of
            your application.
          </p>
        </div>
      </div>

      <TechstackList
        sortedTechList={sortedTechList}
        defaultSection={techTypeQuery}
      />
    </>
  );
}
