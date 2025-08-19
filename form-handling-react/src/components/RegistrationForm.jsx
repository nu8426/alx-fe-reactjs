import { useState } from "react";

export default function RegistrationForm() {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formValues.username) newErrors.username = "Username is required";
    if (!formValues.email) newErrors.email = "Email is required";
    if (!formValues.password) newErrors.password = "Password is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Controlled Registration Data:", formValues);
      setFormValues({ username: "", email: "", password: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formValues.username}
          onChange={handleChange}
        />
        {errors.username && <div style={{ color: "red" }}>{errors.username}</div>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />
        {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
        />
        {errors.password && <div style={{ color: "red" }}>{errors.password}</div>}
      </div>

      <button type="submit">Register</button>
    </form>
  );
}
