import { Field, Form, Formik } from "formik";
import React from "react";
import s from "./UserForm.module.css";

const UserForm = () => {
  const initialValues = {
    name: "",
    surname: "",
    age: "",
    email: "",
    role: "user",
    about: "",
  };

  const handleSubmit = (data, actions) => {
    console.log(data);
    actions.resetForm();
  };

  return (
    <div className={s.wrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name:</span>
            <Field className={s.input} name="name" />
          </label>
          <label className={s.label}>
            <span>Surname:</span>
            <Field className={s.input} name="surname" />
          </label>
          <label className={s.label}>
            <span>Age:</span>
            <Field className={s.input} name="age" />
          </label>
          <label className={s.label}>
            <span>Email:</span>
            <Field className={s.input} name="email" type="email" />
          </label>
          <label className={s.label}>
            <span>Role:</span>
            <Field className={s.input} name="role" as="select">
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </Field>
          </label>
          <label className={s.label}>
            <span>About:</span>
            <Field className={s.input} as="textarea" name="about"></Field>
          </label>
          <button type="submit">Create</button>
        </Form>
      </Formik>
    </div>
  );
};

export default UserForm;
