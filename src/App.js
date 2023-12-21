import "./App.css";
import React from "react";
import Header from "./components/header/header";

import Form from "./screen/login/loginpage";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import ProtectedRoute from "./utils/protectedroutes";
import ProtectedRouteAdmin from "./utils/protectedRoutesAdmin";

import { useState, useEffect } from "react";

import adminHome from "./screen/login/adminHome.js/adminHome";
function App() {
  // hooks
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //   // to check auth state
  const checkUserToken = () => {
    const userToken = localStorage.getItem("token");
    if (!userToken || userToken === "undefined") {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  };
  useEffect(() => {
    checkUserToken();
  }, [isLoggedIn]);

  return (
    <div className="App p-0 m-0">
      <BrowserRouter>
        {isLoggedIn === true ? <Header setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} type={localStorage.getItem("role")} /> : <></>}  
        {/* {isLoggedIn !== null && <Header setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} type={localStorage.getItem("role")} />} */}
        <Routes>
          <Route exact path="/" element={isLoggedIn ? <>{localStorage.getItem("role") === "Admin" ? <Navigate to={"/admin"} /> : <Navigate to={"/home"} />}</> : <Form />} />
           <Route
            path="/admin"
            element={
              <ProtectedRouteAdmin isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}> 
                <adminHome />
              </ProtectedRouteAdmin>
            }
          />
          {/*<Route
            path="/home"
            element={
              <ProtectedRoute setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}>
              </ProtectedRoute>
            }
          /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
