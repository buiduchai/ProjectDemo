import Sidebar from "./Sidebar";
import "./Admin.scss";
import { FaBars } from 'react-icons/fa';
import { useState } from "react";
import { Outlet, Link } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    )
}

export default Admin;