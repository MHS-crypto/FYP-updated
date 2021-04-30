import "./Sidebar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
          <h1 className="h1head">MedTech</h1>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-home"></i>
          
          <Link to="/patientdashboard">Dashboard</Link>
        </div>
        <h2 className="h2head">Main Event</h2>
        <div className="sidebar__link">
          <i className="fa fa-user-secret" aria-hidden="true"></i>
          <Link  to="/patientdashboard3">Appointment Details</Link>
          
        </div>
        <div className="sidebar__link">
          <i className="fa fa-building-o"></i>
          <a href="#">Patient History</a>
        </div>
        
        <div className="sidebar__logout">
          <i className="fa fa-power-off"></i>
          <a href="#">Log out</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
