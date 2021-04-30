import "./Navbar2.css";
import avatar from "../../assets/avatar.svg";
import {Link} from 'react-router-dom';

const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="navbar2">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className="navbar__left">
        <Link to="/home">Home</Link>
        <Link to="/contactus">Contact Us</Link>
        <Link  to="/patientdashboard2">About Me</Link>
        <Link className="active_link" to="/patientdashboard">Patient</Link>
        
      </div>
     
    </nav>
  );
};

export default Navbar;
