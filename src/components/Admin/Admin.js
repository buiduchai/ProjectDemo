import Sidebar from "./Sidebar";
import "./Admin.scss";
import { FaBars } from 'react-icons/fa';
import { useState } from "react";
import { Outlet, Link } from "react-router";


const Admin = (props) => {
    const [collapsed, setCollapsed] = useState(true);
    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <Sidebar collapsed={collapsed}></Sidebar>
            </div>
            <div className="admin-content">
                <div className="admin-header">
                    <FaBars onClick={() => setCollapsed(!collapsed)}></FaBars>
                </div>
                <div className="admin-main">
                    <Outlet></Outlet>
                </div>


            </div>

        </div>
    )
}

export default Admin;