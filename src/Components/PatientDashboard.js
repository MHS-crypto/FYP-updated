import { useState,useEffect } from "react";
import Main from './main/Main';
import Navbar2 from './navbar/Navbar2';
import Sidebar from './sidebar/Sidebar';

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
            <Main />
            <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      </div>
  );
};

export default Dashboard;
