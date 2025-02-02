import { MetaFunction, Outlet } from "@remix-run/react";
import { AppSidebar } from "~/components/layouts/app-sidebar/sidebar";
import { SidebarProvider, SidebarTrigger } from "~/components/ui/sidebar";
// import { UploadButton } from "~/utils/uploadthing";

export const meta: MetaFunction = () => {
  return [
    { title: "zonner.io" },
    { name: "description", content: "AI-Powered Blogging for Video Creators!" },
  ];
};

export default function Index() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-[calc(100%)] h-screen">
        <SidebarTrigger className="my-3" />
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
