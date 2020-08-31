import React from 'react';
import '../../../styles/Navigation/Navbar/Navbar.css';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faCommentDollar } from "@fortawesome/free-solid-svg-icons";
import { faChartPie } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faHistory } from "@fortawesome/free-solid-svg-icons";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";

const navbar = () => (
    <div className="Navbar-Con">
        <div className="Navbar">
            <FontAwesomeIcon icon={faPaypal} className="PayPal-Icon" />
            <div className="Navbar-Items">
                <NavLink to="/" style={{ textDecoration: 'none' }}>
                    <div className="Navbar-Item">
                        <div className="Navbar-Items__Icon-Con">
                            <FontAwesomeIcon icon={faHome} />
                        </div>

                        <div className="Navbar-Items__Name">Home</div>
                    </div>
                </NavLink>
                <NavLink to="/transfer" style={{ textDecoration: 'none' }}>
                    <div className="Navbar-Item">
                        <div className="Navbar-Items__Icon-Con">
                            <FontAwesomeIcon icon={faCommentDollar} />
                        </div>

                        <div className="Navbar-Items__Name">Transfer</div>
                    </div>
                </NavLink>
                <NavLink to="/spending" style={{ textDecoration: 'none' }}>
                    <div className="Navbar-Item">
                        <div className="Navbar-Items__Icon-Con">
                            <FontAwesomeIcon icon={faChartPie} />
                        </div>

                        <div className="Navbar-Items__Name">Spending</div>
                    </div>
                </NavLink>
                <NavLink to="/investing" style={{ textDecoration: 'none' }}>
                    <div className="Navbar-Item">
                        <div className="Navbar-Items__Icon-Con">
                            <FontAwesomeIcon icon={faChartLine} />
                        </div>
                        <div className="Navbar-Items__Name">Investing</div>
                    </div>
                </NavLink>
                <NavLink to="/history" style={{ textDecoration: 'none' }}>
                    <div className="Navbar-Item">
                        <div className="Navbar-Items__Icon-Con">
                            <FontAwesomeIcon icon={faHistory} />
                        </div>

                        <div className="Navbar-Items__Name">History</div>
                    </div>
                </NavLink>
            </div>
            <FontAwesomeIcon icon={faUserAlt} className="AuthorizationIcon" />
        </div>
    </div>

);

export default navbar;