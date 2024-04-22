"use client";
import "remixicon/fonts/remixicon.css";
import "./Navber.css";
import { useState } from "react";
function Navber() {
  // const [switchIcon, setSwitchIcon]  = useState(true)
  const [showMenu, setShowMenu] = useState(true);

  return (
    <div className="header">
      <nav className="nav-container">
        <input type="checkbox" name="" id="check" />
        <div className="logo-container">
          <h3 className="logo">
            Health <span>Facility</span>
          </h3>
        </div>
        <div className="nav-btn">
          <div className="nav-links">
            <ul>
              <li className="nav-link" style={{'--i':' .6s'}}>
                <a href="#">Home</a>
              </li>
              <li className="nav-link" style={{'--i':' .85s'}}>
                <a href="#">
                  Appointments
                  <i class="ri-arrow-down-s-line dropdown-arrow"></i>
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
              <li className="nav-link" style={{'--i':' 1.1s'}}>
                <a href="#">
                  Patients
                  <i class="ri-arrow-down-s-line dropdown-arrow"></i>
                </a>
                <div className="dropdown">
                  <ul>
                    <li className="dropdown-link">
                      <a className="dropdown-link" href="#">
                        Patient Records
                      </a>
                    </li>
                    <li className="dropdown-link">
                      <a className="dropdown-link" href="#">
                        Add New Patient
                      </a>
                    </li>
                    <li className="dropdown-link">
                      <a className="dropdown-link" href="#">
                        Search Patients
                      </a>
                    </li>
                    <div className="arrow"></div>
                  </ul>
                </div>
              </li>
              <li className="nav-link" style={{'--i': '1.40s'}}>
                <a href="#">
                  Tests
                  <i class="ri-arrow-down-s-line dropdown-arrow"></i>
                </a>
                <div className="dropdown">
                  <ul>
                    <li className="dropdown-link">
                      <a className="dropdown-link" href="#">
                        Lab Tests
                      </a>
                    </li>
                    <li className="dropdown-link">
                      <a className="dropdown-link" href="#">
                        Test Results
                      </a>
                    </li>
                    <li className="dropdown-link">
                      <a className="dropdown-link" href="#">
                        Add New Test
                      </a>
                    </li>
                    <div className="arrow"></div>
                  </ul>
                </div>
              </li>
              <li className="nav-link" style={{'--i': '1.88s'}}>
                <a href="#">
                  Doctors
                  <i class="ri-arrow-down-s-line dropdown-arrow"></i>
                </a>
                <div className="dropdown">
                  <ul>
                    <li className="dropdown-link">
                      <a className="dropdown-link" href="#">
                        Doctor Profiles
                      </a>
                    </li>
                    <li className="dropdown-link">
                      <a className="dropdown-link" href="#">
                        Add New Doctor
                      </a>
                    </li>
                    <li className="dropdown-link">
                      <a className="dropdown-link" href="#">
                        Search Doctors
                      </a>
                    </li>
                    <div className="arrow"></div>
                  </ul>
                </div>
              </li>
              <li className="nav-link" style={{'--i':' 2.2s'}}>
                <a href="#">
                  Billing
                  <i class="ri-arrow-down-s-line dropdown-arrow"></i>
                </a>
                <div className="dropdown">
                  <ul>
                    <li className="dropdown-link">
                      <a className="dropdown-link" href="#">
                        Generate Invoices
                      </a>
                    </li>
                    <li className="dropdown-link">
                      <a className="dropdown-link" href="#">
                        Payment History
                      </a>
                    </li>
                    <li className="dropdown-link">
                      <a className="dropdown-link" href="#">
                        Financial Reports
                      </a>
                    </li>
                    <div className="arrow"></div>
                  </ul>
                </div>
              </li>
              <li className="nav-link" style={{'--i': '2.45s'}}>
                <a href="#">
                  Inventory
                  <i class="ri-arrow-down-s-line dropdown-arrow"></i>
                </a>
                <div className="dropdown">
                  <ul>
                    <li className="dropdown-link">
                      <a className="dropdown-link" href="#">
                        Manage Inventory
                      </a>
                    </li>
                    <li className="dropdown-link">
                      <a className="dropdown-link" href="#">
                        Stock Status
                      </a>
                    </li>
                    <li className="dropdown-link">
                      <a className="dropdown-link" href="#">
                        Order Supplies
                      </a>
                    </li>
                    <div className="arrow"></div>
                  </ul>
                </div>
              </li>
              <li className="nav-link" style={{'--i': '2.87s'}}>
                <a href="#">
                  Settings
                  <i class="ri-arrow-down-s-line dropdown-arrow"></i>
                </a>
                <div className="dropdown">
                  <ul>
                    <li>
                      <a className="dropdown-link" href="#">
                        User Profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-link" href="#">
                        Account Settings
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-link" href="#">
                        System Preferences
                      </a>
                    </li>
                    <div className="arrow"></div>
                  </ul>
                </div>
              </li>
              {/*  <li className="nav-link">
                <a href="#">
                  Help
                  <i class="ri-arrow-down-s-line dropdown-arrow"></i>
                </a>
                <div className="dropdown-conttainer">
                  <div className="dropdown-content">
                    <div className="dropdown-group">
                      <div className="dropdown-icon"></div>
                      <span className="dropdown-title"></span>
                      <ul className="dropdown-list">
                        <li>
                          <a className="dropdown-link" href="#">
                            FAQ
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-link" href="#">
                            Support
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-link" href="#">
                            Contact Us
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li> */}
            </ul>
          </div>
          <div className="log-sign" style={{'--i': '3.27s'}}>
            <button className="btn transparents">Log in</button>
            <button className="btn solid">Sign up</button>
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
