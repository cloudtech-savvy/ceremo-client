import { lazy } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
// import axios from "axios";
const SingUpForm = lazy(() => import("../../components/account/SignUpForm"));

const SignUpView = () => {
  const [error, setError] = useState(null);
  const onSubmit = async (values) => {
    // submitting form logic here
    const formData = {
      email: values.email,
      username: values.username,
      password: values.password,
      confirmPassword: values.confirmPassword,
    };

    try {
      const response = await fetch("http://127.0.0.1:8000", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*", // This might not be necessary depending on your server setup
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Sign up request failed"); // Throw an error if the response status is not OK
      }

      const responseData = await response.json(); // Parse the response JSON
      console.log("Sign up successful:", responseData);
    } catch (error) {
      console.error("Sign up failed:", error);
      setError("Sign up failed. Please try again."); // Set error state
      // Handle error
    }
  };

  //   alert(JSON.stringify(values));
  // };
  return (
    <div className="container my-3">
      <div className="row border">
        <div className="col-md-6 bg-light bg-gradient p-3 d-none d-md-block">
          <Link to="/">
            <img
              src="../../images/banner/banner4.png"
              alt="sign up img"
              className="img-fluid"
            />
          </Link>
          <Link to="/">
            <img
              src="../../images/banner/banner5.png"
              alt="sign up img"
              className="img-fluid"
            />
          </Link>
        </div>
        <div className="col-md-6 p-3">
          <h4 className="text-center">Sign Up</h4>
          <SingUpForm onSubmit={onSubmit} />
          {error && <div className="alert alert-danger">{error}</div>}
        </div>
      </div>
    </div>
  );
};

export default SignUpView;
