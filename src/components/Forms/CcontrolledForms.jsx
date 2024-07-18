import { useEffect, useState } from "react";
import s from "./UncontrolledForms.module.css";

const ControlledForms = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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
        <button type="submit" className={s.btn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ControlledForms;
