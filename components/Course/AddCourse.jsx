import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./AddCourse.module.css";
const initFormState = {
  title: "",
  description: "",
  slug: "",
  isFree: true,
  thumbnail: "",
};
const AddCourse = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState(initFormState);

  const handleStateChange = (e) => {
    const { name: key, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setForm({
      ...form,
      [key]: val,
    });
  };

  return (
    <div>
      <h1>Add Course</h1>
      <form className={styles.add_course_form}>
        <label>Title</label>
        <input
          onChange={(e) => handleStateChange(e)}
          name="title"
          type="text"
          value={form.title}
        />
        <label>Description</label>
        <textarea
          onChange={(e) => handleStateChange(e)}
          name="description"
          cols="20"
          rows="4"
          value={form.description}
        ></textarea>
        <label>Slug</label>
        <input
          onChange={(e) => handleStateChange(e)}
          name="slug"
          type="text"
          value={form.slug}
        />
        <label>Free course(Check the Box for free Course)</label>
        <input
          onChange={(e) => handleStateChange(e)}
          name="isFree"
          type="checkbox"
          checked={form.isFree}
        />
        <label>Thumbnail Link</label>
        <input
          onChange={(e) => handleStateChange(e)}
          name="thumbnail"
          type="text"
          value={form.thumbnail}
        />
        <input className={styles.add_course_form_submit} type="submit" />
      </form>
    </div>
  );
};

export default AddCourse;
