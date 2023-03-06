import React, {useState} from 'react'
import './Dashboard.css'
import {useLocation} from "react-router-dom";

function Header({ sidebarOpen, toggleSidebar }) {
    const [showSearch, setShowSearch] = useState(false);
    
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.charAt(1).toUpperCase() + pathname.slice(2).split("/");
    
    return (
        <div className={`dashboard-header-container ${sidebarOpen ? 'dashboard-header-minimize' : '' }`}>
            <div className="dashboard-notification">
                <button onClick={toggleSidebar} className={`dashboard-hamburger-button ${sidebarOpen ? 'none' : '' }`}>
                    <svg className="dashboard-menu-icon">
                        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z">
                        </path>
                    </svg>
                </button>
                <h1 className="dashboard-header-text">
                    {splitLocation}
                </h1>
                {showSearch &&
                    <div className={`search-container ${showSearch ? "show" : ""}`}>
                        <input type="text" placeholder="Search" />
                    </div>
                }
                
                {splitLocation === "Projects" || splitLocation === "Tasks" ?
                    <div className="task-header-button-container">
                        <button className="search-btn" onClick={() => setShowSearch(!showSearch)}><i className="fa fa-search"></i></button>
                    </div>
                    :
                    ""
                }
                <button className="dashboard-notification-icon">
                      <span className="dashboard-notification-number">
                          <svg className="dashboard-menu-icon">
                              <path
                                  d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z">
                              </path>
                          </svg>
                          <span className="dashboard-notification-text">4</span>
                      </span>
                </button>
            </div>
        </div>
    );
}

export default Header;