import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signin } from "../../Redux/AuthReducer/action.js";
import styles from "./AdminLogin.module.css";
const initFormState = {
  email: "",
  password: "",
};

const AdminLogin = () => {
  const [form, setForm] = useState(initFormState);
  const dispatch = useDispatch();

  const handleFormChange = (e) => {
    const { name: key, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setForm({
      ...form,
      [key]: val,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("reg");
    dispatch(signin(form));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.admin_loginForm}>
        <label>Email</label>
        <input
          onChange={(e) => handleFormChange(e)}
          name="email"
          value={form.email}
          type="email"
          required
        />
        <label>Password</label>
        <input
          onChange={(e) => handleFormChange(e)}
          name="password"
          value={form.password}
          type="password"
          required
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default AdminLogin;
