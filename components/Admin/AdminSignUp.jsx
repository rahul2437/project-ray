import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../../Redux/AuthReducer/action";
import styles from "./AdminLogin.module.css";
const initFormState = {
  name: "",
  email: "",
  phone: "",
  password: "",
  role: "student",
};

const AdminSignup = () => {
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
    dispatch(signup(form));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.admin_loginForm}>
        <label>Name</label>
        <input
          onChange={(e) => handleFormChange(e)}
          name="name"
          value={form.name}
          type="text"
          required
        />
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
        <label>Phone Number</label>
        <input
          onChange={(e) => handleFormChange(e)}
          name="phone"
          value={form.phone}
          type="text"
          required
        />
        <label>Role</label>
        <select
          onChange={(e) => handleFormChange(e)}
          name="role"
          value={form.role}
        >
          <option selected value="student">
            Student
          </option>
          <option value="teacher">Teacher</option>
          <option value="organization">Organization</option>
        </select>
        <input
          onChange={(e) => handleFormChange(e)}
          name="phone"
          value={form.phone}
          type="text"
          required
        />
        <input type="submit" value="Signup" />
      </form>
    </div>
  );
};

export default AdminSignup;
