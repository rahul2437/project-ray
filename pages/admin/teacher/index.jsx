import React, { useState } from "react";
import AddCourse from "@/components/Course/AddCourse";
import AdminLogin from "../../../components/Admin/AdminLogin";
import { useDispatch, useSelector } from "react-redux";
import AdminSignup from "../../../components/Admin/AdminSignUp";
import { signout } from "../../../Redux/authReducer/action";
import Dashboard from "../../../components/Admin/Dashboard";

const index = () => {
  const dispatch = useDispatch();
  const { isAuth, user } = useSelector((store) => store.AuthReducer);
  const [formType, setFormType] = useState("login");

  return (
    <div>
      {isAuth ? (
        <div>
          <button className="logoutButton" onClick={() => dispatch(signout())}>
            Logout
          </button>
          {user.role !== "student" ? <Dashboard /> : null}
        </div>
      ) : formType === "login" ? (
        <div>
          <AdminLogin />
          <button onClick={() => setFormType("signup")}>
            Not registered?, Sign Up
          </button>
        </div>
      ) : (
        <div>
          <AdminSignup />
          <button onClick={() => setFormType("login")}>
            Already registered?, Sign In
          </button>
        </div>
      )}
    </div>
  );
};

export default index;
