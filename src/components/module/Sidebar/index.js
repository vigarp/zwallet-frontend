// import internal modules
import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

// import external modules
import './sidebar.css';

const Sidebar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear()
        navigate("/auth/login")
    }
    return (
        <aside className="sidebar w-25 bg-white d-flex flex-column justify-content-between p-3 me-3">
            <div className="sidebar-upper">
                <div className="row p-3">
                    {location.pathname === "/main/home" ? (
                        <>
                            <div className="col flex-grow-0 marker-icon"><img src={require("../../../assets/img/icons/marker_homepage copy.svg").default} alt="marker-icon" /></div>
                            <div className="col flex-grow-0 py-1"><img src={require("../../../assets/img/icons/grid_homepage_active.svg").default} alt="icon-grid-homepage-active" /></div>
                            <div className="col text-decoration-none py-1 dashboard-pointer"><Link to={"/main"} style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>Dashboard</Link></div>
                        </>
                    ) : (
                        <>
                            <div className="col flex-grow-0 py-1"><img src={require("../../../assets/img/icons/grid_homepage_plain.svg").default} alt="icon-grid-homepage-active" /></div>
                            <div className="col text-decoration-none py-1 dashboard-pointer"><Link to={"/main"} style={{ textDecoration: 'none', color: 'black' }}>Dashboard</Link></div>
                        </>
                    )}
                </div>
                <div className="row p-3">
                    {location.pathname === "/main/transfer" ? (
                        <>
                            <div className="col flex-grow-0 marker-icon"><img src={require("../../../assets/img/icons/marker_homepage copy.svg").default} alt="marker-icon" /></div>
                            <div className="col flex-grow-0 "><img src={require("../../../assets/img/icons/arrowup_homepage_active.svg").default} alt="icon-arrowup-homepage" /></div>
                            <div className="col text-decoration-none dashboard-pointer"><Link to={"/main/transfer"} style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>Transfer</Link></div>
                        </>
                    ) : (
                        <>
                            <div className="col flex-grow-0 "><img src={require("../../../assets/img/icons/arrowup_homepage.svg").default} alt="icon-arrowup-homepage" /></div>
                            <div className="col text-decoration-none dashboard-pointer"><Link to={"/main/transfer"} style={{ textDecoration: 'none', color: 'black' }}>Transfer</Link></div>
                        </>
                    )}
                </div>
                <div className="row p-3">
                    {location.pathname === "/main/topup" ? (
                        <>
                            <div className="col flex-grow-0 marker-icon"><img src={require("../../../assets/img/icons/marker_homepage copy.svg").default} alt="marker-icon" /></div>
                            <div className="col flex-grow-0"><img src={require("../../../assets/img/icons/plus_homepage_active.svg").default} alt="icon-plus-homepage" /></div>
                            <div className="col text-decoration-none dashboard-pointer"><Link to={"/main/topup"} style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>Top Up</Link></div>
                        </>
                    ) : (
                        <>
                            <div className="col flex-grow-0"><img src={require("../../../assets/img/icons/plus_homepage.svg").default} alt="icon-plus-homepage" /></div>
                            <div className="col text-decoration-none dashboard-pointer"><Link to={"/main/topup"} style={{ textDecoration: 'none', color: 'black' }}>Top Up</Link></div>
                        </>
                    )}
                </div>
                <div className="row p-3">
                    {location.pathname === "/main/profile" ? (
                        <>
                            <div className="col flex-grow-0 marker-icon"><img src={require("../../../assets/img/icons/marker_homepage copy.svg").default} alt="marker-icon" /></div>
                            <div className="col flex-grow-0"><img src={require("../../../assets/img/icons/user_homepage_active.svg").default} alt="icon-user-homepage" /></div>
                            <div className="col text-decoration-none dashboard-pointer"><Link to={"/main/profile"} style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>Profile</Link></div>
                        </>
                    ) : (
                        <>
                            <div className="col flex-grow-0"><img src={require("../../../assets/img/icons/user_homepage.svg").default} alt="icon-user-homepage" /></div>
                            <div className="col text-decoration-none dashboard-pointer"><Link to={"/main/profile"} style={{ textDecoration: 'none', color: 'black' }}>Profile</Link></div>
                        </>
                    )}
                </div>
            </div>
            <div className="sidebar-lower">
                <div className="row p-3">
                    <div className="col flex-grow-0"><img src={require("../../../assets/img/icons/logout_homepage.svg").default} alt="icon-logout-homepage" /></div>
                    <div onClick={handleLogout} className="col text-decoration-none dashboard-pointer"><Link to={"/auth/login"} style={{ textDecoration: 'none', color: 'black' }}>Logout</Link></div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar
