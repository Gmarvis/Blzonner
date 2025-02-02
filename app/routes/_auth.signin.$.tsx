import { SignIn } from "@clerk/remix";

export default function Index() {
  return (
    <div className="grid grid-cols-2">
      <div className="flex justify-center items-center w-full ">
        <SignIn />
      </div>
      <div className="bg-slate-300 dark:bg-slate-900 h-screen w-[50vw]"></div>
    </div>
  );
}
