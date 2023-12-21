import "./App.css";
import React from "react";

// import Header from "./components/header/Header";
// import Learningtab from "./screen/learningtab/learningtab";
// import AdminTable from "./components/trainingTab/AdminTable";
// import Form from "./components/loginPageUI/loginPage";
import Form from "./screen/login/loginpage";
// import Report from "./screen/reportTab/report";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import TrainingTabPage from "./screen/trainingTab/TrainingTabPage";
// import PageNotFoundPage from "./screen/errorPages/PageNotFoundPage";
// import AccessDeniedPage from "./screen/errorPages/AccessDeniedPage";
// import InternalServerErrorPage from "./screen/errorPages/InternalServerErrorPage";
// import CourseContentPage from "./screen/courseContent/CourseContentPage";
import ProtectedRoute from "./utils/protectedroutes";
import ProtectedRouteAdmin from "./utils/protectedRoutesAdmin";

import { useState, useEffect } from "react";
// import { BrowserRouter } from "react-router-dom";
// import DashboardPage from "./screen/adminDashboard/dashboard";
// import Users from "./screen/users/userHome";
// import UserEditForm from "./screen/users/userEditForm";
// import ViewUser from "./screen/users/viewUser";
// // import AddUser from "./components/users/addScreen/addUser";
// import CreateCourse from "./components/trainingTab/Form";

// import SingleUserReport from "./screen/adminPerformanceReport/SingleUserReport";
// import PerformanceTable from "./screen/adminPerformanceReport/PerformanceTable";
// import TotalInternsReport from "./screen/adminPerformanceReport/TotalInternsReport";

// import BatchPage from "./screen/batch/BatchPage";
// import BatchDetailsPage from "./screen/batch/BatchDetailsPage";
// import EditBatchPage from "./screen/batch/EditBatchPage";

// import EditCourse from "./components/trainingTab/EditForm";
// import InfoCourse from "./components/courseContent/CourseContent";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import ConfirmationBox from "./components/trainingTab/ConfirmationBox";
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
        {/* {isLoggedIn === true ? <Header setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} type={localStorage.getItem("role")} /> : <></>} */}
        <Routes>
          <Route exact path="/" element={isLoggedIn ? <>{localStorage.getItem("role") === "Admin" ? <Navigate to={"/admin"} /> : <Navigate to={"/home"} />}</> : <Form />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}>
                {/* <Learningtab /> */}
                <adminHome />
                {console.log("adminhome")}
              </ProtectedRoute>
            }
          />
          <Route
            path="/home"
            element={
              <ProtectedRoute setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}>
                {/* <Home /> */}
                {console.log("home")}
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
