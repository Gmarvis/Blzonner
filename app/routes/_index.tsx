import type { MetaFunction } from "@remix-run/node";
// import { useLoaderData } from "@remix-run/react";
import { HomeNavbar } from "~/components/home-layout/home-navbar";
import { db } from "~/db";

export async function loader() {
  const response = await db.execute("select 1");
  return response;
}

export const meta: MetaFunction = () => {
  return [
    { title: "Blzonner" },
    { name: "description", content: "AI-Powered Blogging for Video Creators!" },
  ];
};

export default function Index() {
  // const data = useLoaderData<typeof loader>();
  // console.log(data);
  return (
    <div className="flex h-screen items-center justify-center">
      <HomeNavbar />
    </div>
  );
}
