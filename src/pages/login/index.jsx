import { useFormik } from "formik";
import { Link } from "react-router-dom";
import InputField from "../../components/shere/InputField";
import { Button, P } from "../../components/ui";
import emailValidator from "../../utils/email-validator";
import passwordValidator from "../../utils/password-validator";
import style from "./index.module.css";

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (emailValidator(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (passwordValidator(values.password)) {
    errors.password =
      "Must be one lowercase,uppercase,number, special character mix";
  }

  return errors;
};

const Login = () => {
  const { handleChange, handleBlur, values, errors, touched, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validate,
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
      },
    });
  return (
    <div className={style.login}>
      <h1>Sign in</h1>
      <P>Enter your email address and password</P>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Email address"
          name="email"
          type="text"
          placeholder="Enter email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          error={errors.email}
        />
        {touched.email && errors.email ? (
          <P color="#ff0000d1">{errors.email}</P>
        ) : null}
        <InputField
          label="Password"
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          error={errors.password}
        />
        {touched.password && errors.password ? (
          <P color="#ff0000d1">{errors.password}</P>
        ) : null}

        <Button type="submit" width="100%">
          Sign in
        </Button>
      </form>
      <P>
        Don't have an account? <Link to="/"> Sign up</Link>
      </P>
    </div>
  );
};

export default Login;
