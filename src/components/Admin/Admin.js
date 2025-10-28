import Sidebar from "./Sidebar";
import "./Admin.scss";
import { FaBars } from 'react-icons/fa';
import { useState } from "react";


const Admin = (props) => {
    const [collapsed, setCollapsed] = useState(true);
    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <Sidebar collapsed={collapsed}></Sidebar>
            </div>
            <div className="admin-content">
                <FaBars onClick={() => setCollapsed(!collapsed)}></FaBars>
                Admin components
            </div>

        </div>
    )
}

export default Admin;