import s from "./UncontrolledForms.module.css";

const handleSubmit = (e) => {
  e.preventDefault();
  const form = e.target;
  console.log("Form submitted");
  const { email, password, username } = form.elements;
  console.log({
    email: email.value,
    username: username.value,
    password: password.value,
  });
  form.reset();
};

const UncontrolledForms = () => {
  return (
    <div className={s.wrapper}>
      <form onSubmit={handleSubmit} className={s.form}>
        <label className={s.label}>
          <span>Name:</span>
          <input
            name="username"
            type="text"
            placeholder="Enter name..."
            className={s.input}
          />
        </label>
        <label className={s.label}>
          <span>Email:</span>
          <input
            name="email"
            type="email"
            placeholder="Enter email..."
            className={s.input}
          />
        </label>
        <label className={s.label}>
          <span>Password:</span>
          <input
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

export default UncontrolledForms;
