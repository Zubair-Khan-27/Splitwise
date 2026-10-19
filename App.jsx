
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./context/AuthContext.jsx";

import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";

import Dashboard from "./pages/Dashboard.jsx";
import Groups from "./pages/Groups.jsx";
import Expenses from "./pages/Expenses.jsx";
import Balances from "./pages/Balances.jsx";
import Profile from "./pages/Profile.jsx";

import Layout from "./components/Layout.jsx";

export default function App() {
    const { user } = useAuth();

    return (
        <Routes>
            {/* Default route */}
            <Route
                path="/"
                element={
                    <Navigate
                        to={user ? "/dashboard" : "/login"}
                        replace
                    />
                }
            />

            {/* Public routes */}
            <Route
                path="/login"
                element={
                    user
                        ? <Navigate to="/dashboard" replace />
                        : <Login />
                }
            />

            <Route
                path="/register"
                element={
                    user
                        ? <Navigate to="/dashboard" replace />
                        : <Register />
                }
            />

            {/* Protected routes with common Layout */}
            <Route
                element={
                    user
                        ? <Layout />
                        : <Navigate to="/login" replace />
                }
            >
                <Route
                    path="/dashboard"
                    element={<Dashboard />}
                />

                <Route
                    path="/groups"
                    element={<Groups />}
                />

                <Route
                    path="/expenses"
                    element={<Expenses />}
                />

                <Route
                    path="/balances"
                    element={<Balances />}
                />

                <Route
                    path="/profile"
                    element={<Profile />}
                />
            </Route>

            {/* Unknown route */}
            <Route
                path="*"
                element={<Navigate to="/" replace />}
            />
        </Routes>
    );
}
