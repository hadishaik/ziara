// "use client";
import Sidebar from "@/components/admin-panel/Sidebar";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  // const { data: session, status } = useSession();
  // const router = useRouter();
  // // const isLoading = useAppSelector((store) => store.loadingreducer);

  // if (!session) {
  //   return router.push("/login");
  // }

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full h-full ">
        {/* <Navbar/> */}
        <div className="bg-gray h-[calc(100vh-6px)]"> {children}</div>
      </div>
      {/* {true && <Loader />} */}
    </div>
  );
};

export default layout;
