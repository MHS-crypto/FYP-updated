import { useState,useEffect } from "react";
import Navbar2 from './navbar/Navbar2';
import Sidebar from './sidebar/Sidebar';
import Aboutme2 from './Aboutme2/Aboutme2';
const Dashboard = () => {

  


  //finish here
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };
  return (
    <div className="container0">
            <Navbar2 sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
            <Aboutme2 />
            <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      </div>
  );
};

export default Dashboard;
