import { useState,useEffect } from "react";
import Navbar2 from './navbar/Navbar2';
import Sidebar2 from './sidebar/Sidebar2';
import MedicalHistory from './MedicalHistory/MedicalHistory';
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
            <MedicalHistory/>
            <Sidebar2 sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      </div>
  );
};

export default Dashboard;
