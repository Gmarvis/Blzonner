import { Outlet } from "@remix-run/react";
import { AppSidebar } from "~/components/layouts/app-sidebar";
import { PageHeader, PageLayout, PageSection } from "~/components/layouts/page";
import { Button } from "~/components/ui/button";
import { SidebarProvider, SidebarTrigger} from "~/components/ui/sidebar";
import { UploadButton } from "~/utils/uploadthing";

export default function index() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  )
  return (
    <div className="w-full flex justify-between gap-2">
      <PageLayout className="h-screen">
        <PageHeader
          title={"Stodio"}
          subTitle={
            "my workspace for uploading and turning videos to blog posts"
          }
          actions={<Button>Upload video</Button>}
        ></PageHeader>
        <PageSection className="h-full">
          <Outlet />
          <UploadButton
            endpoint="videoOrAudioUploader"
            onClientUploadComplete={(res) => {
              // Do something with the response
              console.log("Files: ", res);
              alert("Upload Completed");
            }}
            onUploadError={(error: Error) => {
              // Do something with the error.
              alert(`ERROR! ${error.message}`);
            }}
          />
        </PageSection>
      </PageLayout>
    </div>
  );
}
