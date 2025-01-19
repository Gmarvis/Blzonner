import type { MetaFunction } from "@remix-run/node";
import { HomeNavbar } from "~/components/home-layout/home-navbar";

export const meta: MetaFunction = () => {
  return [
    { title: "Blzonner" },
    { name: "description", content: "AI-Powered Blogging for Video Creators!" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <HomeNavbar />

    </div>
  );
}
