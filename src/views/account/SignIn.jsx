import { lazy } from "react";
import { Link } from "react-router-dom";
const SignInForm = lazy(() => import("../../components/account/SignInForm"));

const SignInView = () => {
  // const [error, setError] = useState(null);  // Remove this line
  const onSubmit = async (values) => {
    // submitting form  logic here
    const formData = {
      email: values.email,
      password: values.password,
    };
    try {
      const response = await fetch("http://127.0.0.1:8000/sign-in/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Sign in request failed");
      }

      const data = await response.json();
      console.log("Sign in successful:", data);
      // Handle success
    } catch (error) {
      console.error("Sign in failed:", error);
      // Handle error
    }
  };
  //     alert(JSON.stringify(values));
  // };
  return (
    <div className="container my-3">
      <div className="row border">
        <div className="col-md-6 bg-light bg-gradient p-3 d-none d-md-block">
          <Link to="/">
            <img
              src="../../images/banner/banner1.png"
              alt="sign in img"
              className="img-fluid"
            />
          </Link>
          <Link to="/">
            <img
              src="../../images/banner/banner6.png"
              alt="sign in img"
              className="img-fluid"
            />
          </Link>
        </div>
        <div className="col-md-6 p-3">
          <h4 className="text-center">Sign In</h4>
          <SignInForm onSubmit={onSubmit} />
          {/* {error && <div className="alert alert-danger">{error}</div>} */}
        </div>
      </div>
    </div>
  );
};

export default SignInView;
