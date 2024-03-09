"use client";

import Sidebar from "../Sidebar/Sidebar";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex h-screen overflow-hidden">
    <Sidebar />
    <div>
      
    </div>
  </div>;
};

export default DefaultLayout;
