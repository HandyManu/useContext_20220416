import React from "react";
import "../pages/dashboard.css";
import { useAuth } from "../context/authConntext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
    const { user, logOut } = useAuth();

    const handleLogout = () => {
        if (logOut()) {
            navigate("/");
        }
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-card">
                <h1 className="dashboard-title">Bienvenido al Dashboard</h1>
                <p className="dashboard-user">
                    hola, <span>{user || "usuario logeado"}</span>
                </p>
                <button className="logout-button" onClick={handleLogout}>
                    Cerrar sesión
                </button>
            </div>
        </div>
    );
};

export default Dashboard;
