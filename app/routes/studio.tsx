import { Outlet } from "@remix-run/react";
import { PageHeader, PageLayout, PageSection } from "~/components/layouts/page";
import { Button } from "~/components/ui/button";

export default function index() {
  return (
    <div className="w-full flex justify-between gap-2">
      <PageLayout className="h-screen">
        <PageHeader
          title={"Stodio"}
          subTitle={"my workspace for uploading and turning videos to blog posts"}
          actions={<Button>Upload video</Button>}
        ></PageHeader>
        {/* <PageSection className="h-full">
          <Outlet/>
        </PageSection> */}
      </PageLayout>
    </div>
  );
}
