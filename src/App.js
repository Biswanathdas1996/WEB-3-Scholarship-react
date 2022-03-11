import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import StudentRegistration from "./components/student/StudentRegistration";
import web3 from "./web3";
import LandingPage from "./components/landing/LandingPage";
import { Routes, Route, Link } from "react-router-dom";
import VendorRegistration from "./components/vendor/VendorRegistration";
import VendorPendingList from "./components/vendor/VendorPendingList";
import IssueDevice from "./components/vendor/IssueDevice";
import AssignDevice from "./components/vendor/AssignDevice";
import AdminDashboard from "./components/admin/AdminDashboard";
import VendorDashboard from "./components/vendor/VendorDashboard";
import VendorApprovedList from "./components/vendor/VendorApprovedList";
import StudentList from "./components/student/StudentList";
import StudentDetails from "./components/student/StudentDetails";
import VendorIssuedList from "./components/vendor/VendorIssuedList";
import VendorTransaction from "./components/vendor/VendorTransaction";
import AdminTransaction from "./components/admin/AdminTransaction";
import AllIssuedList from "./components/admin/AllIssuedList";
export const AccountContest = React.createContext("light");

const App = () => {
  const [account, setaccount] = useState(null);
  async function fetchData() {
    const accounts = await web3.eth.getAccounts();
    setaccount(accounts);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AccountContest.Provider value={account}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<StudentRegistration />} />
        <Route path="/vendor-register" element={<VendorRegistration />} />
        <Route path="/vendor-pending" element={<VendorPendingList />} />
        <Route path="/vendor-approved" element={<VendorApprovedList />} />
        <Route path="/issue-device" element={<IssueDevice />} />
        <Route path="/vendor-issued-list" element={<VendorIssuedList />} />
        <Route path="/vendor-transaction" element={<VendorTransaction />} />
        <Route path="/assign-device/:id" element={<AssignDevice />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/all-transaction" element={<AdminTransaction />} />
        <Route path="/vendor-dashboard" element={<VendorDashboard />} />
        <Route path="/student-list" element={<StudentList />} />
        <Route path="/student-details" element={<StudentDetails />} />
        <Route path="/all-issued-device" element={<AllIssuedList />} />
      </Routes>
    </AccountContest.Provider>
  );
};
export default App;
