import React, { useEffect, useState } from "react";
import Login from "../src/component/auth/Login";
import EmployeeDashboard from "./component/dashboard/EmployeeDashboard";
import AdminDashboard from "./component/dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    // console.log(email, password);
    if (email == "amin@me.com" && password == "123") {
      console.log("Admin aa rhe hai");
    } else if (email == "user@me.com" && password == "123") {
      console.log("User aa gya hai");
    } else {
      alert("Invalid credentials");
    }
  };
  handleLogin("admin@");
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard /> */}
    </> //Fragments
  );
};

export default App;
