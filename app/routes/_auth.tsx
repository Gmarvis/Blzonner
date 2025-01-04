import { Outlet } from '@remix-run/react';

export default function Index() {
  return (
    <div className="h-screen w-screen m-auto flex justify-center items-center">
      <Outlet />
    </div>
  );
}
