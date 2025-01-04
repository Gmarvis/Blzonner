import type { MetaFunction } from "@remix-run/node";
import { ModeToggle } from "~/components/ui/mode-toggle";

export const meta: MetaFunction = () => {
  return [
    { title: "Blzonner" },
    { name: "description", content: "AI-Powered Blogging for Video Creators!" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <h1 className="text-4xl font-bold">Welcome to Blzonner.io</h1>
      <ModeToggle />
    </div>
  );
}
