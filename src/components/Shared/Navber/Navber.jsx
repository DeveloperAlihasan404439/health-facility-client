import "remixicon/fonts/remixicon.css";
import "./Navber.css";
import logo from "../../../assets/health facility logo.png";
import Image from "next/image";
import Link from "next/link";
function Navber() {
  return (
    <div className="header">
      <nav className="nav-container rounded-b-md">
        <input type="checkbox" name="" id="check" />
        <div className="logo-container">
          <Image
            width={300}
            height={300}
            src={logo}
            alt="logo"
            className="h-16"
          />
        </div>
        <div className="nav-btn">
          <div className="nav-links">
            <ul>
              <li className="nav-link" style={{ "--i": " .6s" }}>
                <a href="#">Home</a>
              </li>
              <li className="nav-link" style={{ "--i": " .85s" }}>
                <a href="#">
                  Appointments
                  <i className="ri-arrow-down-s-line dropdown-arrow"></i>
                </a>
                <div className="dropdown">
                  <ul>
                    <li className="dropdown-link">
                      <a href="#">Schedule Appointments</a>
                    </li>
                    <li className="dropdown-link">
                      <a href="#">Manage Appointments</a>
                    </li>
                    <li className="dropdown-link">
                      <a href="#">Appointment Calendar</a>
                    </li>
                    <div className="arrow"></div>
                  </ul>
                </div>
              </li>
              <li className="nav-link" style={{ "--i": " 1.1s" }}>
                <a href="#">
                  Patients
                  <i className="ri-arrow-down-s-line dropdown-arrow"></i>
                </a>
                <div className="dropdown">
                  <ul>
                    <li className="dropdown-link">
                      <a href="#">Patient Records</a>
                    </li>
                    <li className="dropdown-link">
                      <a href="#">Add New Patient</a>
                    </li>
                    <li className="dropdown-link">
                      <a href="#">Search Patients</a>
                    </li>
                    <div className="arrow"></div>
                  </ul>
                </div>
              </li>
              <li className="nav-link" style={{ "--i": "1.40s" }}>
                <a href="#">
                  Tests
                  <i className="ri-arrow-down-s-line dropdown-arrow"></i>
                </a>
                <div className="dropdown">
                  <ul>
                    <li className="dropdown-link">
                      <a href="#">Lab Tests</a>
                    </li>
                    <li className="dropdown-link">
                      <a href="#">Test Results</a>
                    </li>
                    <li className="dropdown-link">
                      <a href="#">Add New Test</a>
                    </li>
                    <div className="arrow"></div>
                  </ul>
                </div>
              </li>
              <li className="nav-link" style={{ "--i": "1.88s" }}>
                <a href="#">
                  Doctors
                  <i className="ri-arrow-down-s-line dropdown-arrow"></i>
                </a>
                <div className="dropdown">
                  <ul>
                    <li className="dropdown-link">
                      <a href="#">Doctor Profiles</a>
                    </li>
                    <li className="dropdown-link">
                      <a href="#">Add New Doctor</a>
                    </li>
                    <li className="dropdown-link">
                      <a href="#">Search Doctors</a>
                    </li>
                    <div className="arrow"></div>
                  </ul>
                </div>
              </li>
              <li className="nav-link" style={{ "--i": " 2.2s" }}>
                <a href="#">
                  Billing
                  <i className="ri-arrow-down-s-line dropdown-arrow"></i>
                </a>
                <div className="dropdown">
                  <ul>
                    <li className="dropdown-link">
                      <a href="#">Generate Invoices</a>
                    </li>
                    <li className="dropdown-link">
                      <a href="#">Payment History</a>
                    </li>
                    <li className="dropdown-link">
                      <a href="#">Financial Reports</a>
                    </li>
                    <div className="arrow"></div>
                  </ul>
                </div>
              </li>
              <li className="nav-link" style={{ "--i": "2.45s" }}>
                <a href="#">
                  Inventory
                  <i className="ri-arrow-down-s-line dropdown-arrow"></i>
                </a>
                <div className="dropdown">
                  <ul>
                    <li className="dropdown-link">
                      <a href="#">Manage Inventory</a>
                    </li>
                    <li className="dropdown-link">
                      <a href="#">Stock Status</a>
                    </li>
                    <li className="dropdown-link">
                      <a href="#">Order Supplies</a>
                    </li>
                    <div className="arrow"></div>
                  </ul>
                </div>
              </li>
              <li className="nav-link" style={{ "--i": "2.87s" }}>
                <a href="#">
                  Settings
                  <i className="ri-arrow-down-s-line dropdown-arrow"></i>
                </a>
                <div className="dropdown">
                  <ul>
                    <li className="dropdown-link">
                      <a href="#">User Profile</a>
                    </li>
                    <li className="dropdown-link">
                      <a href="#">Account Settings</a>
                    </li>
                    <li className="dropdown-link">
                      <a href="#">System Preferences</a>
                    </li>
                    <li className="dropdown-link">
                      <a href="#">Contact Us</a>
                    </li>
                    <div className="arrow"></div>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="log-sign" style={{ "--i": "3.27s" }}>
            <Link href="/login" className="btn solid">Log in</Link>
          </div>
        </div>
        <div className="hamburger-menu-container">
          <div className="hamburger-menu">
            <div></div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navber;
