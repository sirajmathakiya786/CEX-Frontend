import { BrowserRouter,Route,Routes } from "react-router-dom";
import React from 'react'
import { Create } from "../components/UserManagement/Create";
import Header from "../components/Header";
import { Dashboard } from "../components/Dashboard/Dashboard";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "../components/Login/Login";
import UserList from "../components/UserManagement/List";
import OfferList from "../components/OfferManagement/List";
import { OfferCreate } from "../components/OfferManagement/Create";
import  CoinList  from "../components/CoinManagement/List";

const AppRoutes = () => {
  return (
    <BrowserRouter>
     <ToastContainer/>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="user-list" element={<UserList />} />
        <Route path="add-user" element={<Create />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="offer-list" element={<OfferList />} />
        <Route path="add-offer" element={<OfferCreate />} />
        <Route path="coin-list" element={<CoinList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes