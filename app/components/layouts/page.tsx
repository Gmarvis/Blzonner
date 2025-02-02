import { Link } from "@remix-run/react";
import { PropsWithChildren } from "react";
import { cn } from "~/lib/utils";

export interface PageLayoutProps {
  width?: "screen" | "narrow";
  height?: "overflow" | "screen";
  className?: string;
}

export function PageLayout(props: PropsWithChildren<PageLayoutProps>) {
  return (
    <main
      className={cn(
        "flex-1 flex flex-col h-full w-full px-4",
        {
          "max-w-6xl mx-auto": props.width === "narrow",
          "h-[calc(100svh-1rem)] max-h-[calc(100svh-1rem)]":
            props.height === "screen",
        },
        props.className
      )}
    >
      {props.children}
    </main>
  );
}

export function PageBody() {
  return <div></div>;
}

interface PageHeaderProps {
  title: string;
  subTitle: string;
  actions?: React.ReactNode;
}

export function PageHeader(props: PageHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row justify-between  sm:items-center gap-2 py-2"
      )}
    >
      <div>
        <h1 className="text-xl font-bold">{props.title}</h1>
        <p className="text-gray-500 text-xs">{props.subTitle}</p>
      </div>
      <div>{props.actions}</div>
    </div>
  );
}

export function PageFooter() {
  return <div></div>;
}

export function PageSidebar() {
  return <div></div>;
}

export function PageSection(props: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={cn(
        "border border-1-border w-full  p-2 rounded-md",
        props.className
      )}
    >
      {props.children}
    </div>
  );
}

export function PageAction() {
  return <div></div>;
}

export function PageWithMenu() {
  return <div></div>;
}

export function ErrorPage() {
  return (
    <main>
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
        <div className="max-w-lg mx-auto space-y-3 text-center">
          <h3 className="text-primarytheme font-semibold">404 Error</h3>
          <p className="text-gray-800 text-4xl font-semibold sm:text-5xl">
            Page not found
          </p>
          <p className="text-gray-600">
            Sorry, the page you are looking for could not be found or has been
            removed.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              // onClick={() => router.back()}
              className="block py-2 px-4 text-white font-medium bg-primarytheme hover:bg-primarytheme active:bg-primarytheme rounded-lg"
            >
              Go back
            </button>
            <Link
              to={"/"}
              className="block py-2 px-4 text-gray-700 hover:bg-gray-50 font-medium duration-150 active:bg-gray-100 border rounded-lg"
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
