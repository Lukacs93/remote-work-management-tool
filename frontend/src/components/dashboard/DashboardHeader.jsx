import React from 'react'

function Header() {
    return (
        <div className="dashboard-header-container">
            <div className="dashboard-notification">
                <button className="dashboard-hamburger-button">
                    <svg className="dashboard-menu-icon">
                        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z">
                        </path>
                    </svg>
                </button>
                <h1 className="dashboard-header-text">
                    Dashboard
                </h1>
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