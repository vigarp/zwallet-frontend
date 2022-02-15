// import internal modules
import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

// import external modules
import LandingPage from "../pages";
import Page404 from "../pages/404";

import Auth from "../pages/Auth";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import ResetPassword from "../pages/Auth/ResetPassword";

import Main from "../pages/Main";
import Home from "../pages/Main/Home";
import History from "../pages/Main/History";
import DetailHistory from "../pages/Main/DetailHistory";
import Transfer from "../pages/Main/Transfer";
import TransferInput from "../pages/Main/TransferInput";
import Confirmation from "../pages/Main/Confirmation";
import TransferFailed from "../pages/Main/TransferFailed";
import TransferSuccess from "../pages/Main/TransferSuccess";
import TopUp from "../pages/Main/TopUp";
import Profile from "../pages/Main/Profile";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/auth" element={<Auth />}>
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<SignUp />} />
                    <Route path="forgot-password" element={<ForgotPassword />} />
                    <Route path="reset-password" element={<ResetPassword />} />
                    <Route index element={<Navigate to="/auth/login" />} />
                </Route>

                <Route path="/main" element={<Main />}>
                    <Route path="home" element={<Home />} />
                    <Route path="history" element={<History />} />
                    <Route path="history/:id" element={<DetailHistory />} />
                    <Route path="transfer" element={<Transfer />} />
                    <Route path="transfer/:id" element={<TransferInput />} />
                    <Route path="confirmation" element={<Confirmation />} />
                    <Route path="transfer-failed" element={<TransferFailed />} />
                    <Route path="transfer-success" element={<TransferSuccess />} />
                    <Route path="topup" element={<TopUp />} />
                    <Route path="profile" element={<Profile />} />
                    <Route index element={<Navigate to="/main/home" />} />
                </Route>

                <Route path="/*" element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router