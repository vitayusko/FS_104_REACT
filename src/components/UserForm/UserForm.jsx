import { Field, Form, Formik } from "formik";
import React from "react";

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
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <label>
            <span>Name:</span>
            <Field name="name" />
          </label>
          <label>
            <span>Surname:</span>
            <Field name="surname" />
          </label>
          <label>
            <span>Age:</span>
            <Field name="age" />
          </label>
          <label>
            <span>Email:</span>
            <Field name="email" type="email" />
          </label>
          <label>
            <span>Role:</span>
            <Field name="role" as="select">
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </Field>
          </label>
          <label>
            <span>About:</span>
            <Field as="textarea" name="about"></Field>
          </label>
          <button type="submit">Create</button>
        </Form>
      </Formik>
    </div>
  );
};

export default UserForm;
