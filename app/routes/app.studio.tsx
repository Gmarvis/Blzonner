import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "zonner.io | studio" },
    { name: "description", content: "AI-Powered Blogging for Video Creators!" },
  ];
};
export default function Index() {
  return (
    <div>
      <h3>hello</h3>
    </div>
  );
}
