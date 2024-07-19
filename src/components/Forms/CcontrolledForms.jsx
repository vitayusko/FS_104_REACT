import { useEffect, useState } from "react";
import s from "./UncontrolledForms.module.css";

const ControlledForms = ({ registered }) => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    country: "Ukraine",
    aboutMe: "",
    gender: "female",
    agree: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    registered(formData);
    setFormData({ username: "", password: "", email: "" });
  };

  // const handleChangeUserName = (e) => {
  //   setFormData({ ...formData, username: e.target.value });
  // };

  // const handleChangeEmail = (e) => {
  //   setFormData({ ...formData, email: e.target.value });
  // };

  // const handleChangePassword = (e) => {
  //   setFormData({ ...formData, password: e.target.value });
  // };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    if (name === "agree") {
      return setFormData({ ...formData, agree: !formData.agree });
    }

    setFormData({ ...formData, [name]: value });
  };
  useEffect(() => {
    if (formData.username === "Lalala") {
      alert("is not valid");
    }
  }, [formData.username]);

  return (
    <div className={s.wrapper}>
      <form onSubmit={handleSubmit} className={s.form}>
        <label className={s.label}>
          <span>Name:</span>
          <input
            onChange={handleChangeInput}
            value={formData.username}
            name="username"
            type="text"
            placeholder="Enter name..."
            className={s.input}
          />
        </label>
        <label className={s.label}>
          <span>Email:</span>
          <input
            onChange={handleChangeInput}
            value={formData.email}
            name="email"
            type="email"
            placeholder="Enter email..."
            className={s.input}
          />
        </label>
        <label className={s.label}>
          <span>Password:</span>
          <input
            onChange={handleChangeInput}
            value={formData.password}
            name="password"
            type="password"
            placeholder="Enter password..."
            className={s.input}
          />
        </label>
        <label className={s.label}>
          <span>Country</span>
          <select
            value={formData.country}
            onChange={handleChangeInput}
            className={s.input}
            name="country"
          >
            <option value="Ukraine">Ukraine</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="Germany">Germany</option>
          </select>
        </label>
        <label>
          <input
            checked={formData.gender === "male"}
            onChange={handleChangeInput}
            type="radio"
            name="gender"
            value="male"
          />
          <span>Male</span>
        </label>
        <label>
          <input
            checked={formData.gender === "female"}
            onChange={handleChangeInput}
            type="radio"
            name="gender"
            value="female"
          />
          <span>Female</span>
        </label>
        <label>
          <input
            checked={formData.gender === "other"}
            onChange={handleChangeInput}
            type="radio"
            name="gender"
            value="other"
          />
          <span>Other</span>
        </label>
        <label className={s.label}>
          <span>About Me</span>
          <textarea
            name="aboutMe"
            onChange={handleChangeInput}
            value={formData.aboutMe}
          ></textarea>
        </label>
        <label>
          <input
            onChange={handleChangeInput}
            checked={formData.agree}
            name="agree"
            type="checkbox"
          />
          <span>I agree with rules</span>
        </label>
        <button type="submit" className={s.btn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ControlledForms;
