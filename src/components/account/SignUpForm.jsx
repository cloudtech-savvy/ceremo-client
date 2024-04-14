import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { Link } from "react-router-dom";
import renderFormGroupField from "../../helpers/renderFormGroupField";
import {required,maxLength20,minLength8,passwordMatch,} from "../../helpers/validation";
import { ReactComponent as IconEmail } from "bootstrap-icons/icons/envelope.svg";
import { ReactComponent as IconUser } from "bootstrap-icons/icons/person.svg";
import { ReactComponent as IconShieldLock } from "bootstrap-icons/icons/shield-lock.svg";

const SignUpForm = (props) => {
  const { handleSubmit, submitting, onSubmit, submitFailed } = props;
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`needs-validation ${submitFailed ? "was-validated" : ""}`}
      noValidate
    >
      <Field
        name="email"
        type="email"
        label="Email"
        component={renderFormGroupField}
        placeholder="Enter your email address"
        icon={IconEmail}
        validate={[required]}
        className="mb-3"
      />
      <Field
        name="username"
        type="text"
        label="Username"
        component={renderFormGroupField}
        placeholder="Enter your username"
        icon={IconUser}
        validate={[required]}
        required={true}
        className="mb-3"
      />

      <Field
        name="password"
        type="password"
        label="Your password"
        component={renderFormGroupField}
        placeholder="******"
        icon={IconShieldLock}
        validate={[required, maxLength20, minLength8]}
        required={true}
        maxLength="20"
        minLength="8"
        className="mb-3"
      />
      <Field
        name="confirmPassword"
        type="password"
        label="Confirm Password"
        component={renderFormGroupField}
        placeholder="******"
        icon={IconShieldLock}
        validate={[required, maxLength20, minLength8,passwordMatch]}
        required={true}
        maxLength="20"
        minLength="8"
        className="mb-3"
      />
      <div className="d-grid">
        <button
          type="submit"
          className="btn btn-primary mb-3"
          disabled={submitting}
        >
          Create
        </button>
      </div>
      <Link className="float-start" to="/account/signin" title="Sign In">
        Sing In
      </Link>
      <Link
        className="float-end"
        to="/account/forgotpassword"
        title="Forgot Password"
      >
        Forgot password?
      </Link>
      <div className="clearfix"></div>
      <hr></hr>
      <div className="row">
        <div className="col- text-center">
          <p className="text-muted small">Or you can join with</p>
        </div>
        <div className="col- text-center">
          <Link to="/" className="btn btn-light text-white bg-twitter me-3">
            <i className="bi bi-twitter-x" />
          </Link>
          <Link to="/" className="btn btn-light text-white me-3 bg-facebook">
            <i className="bi bi-facebook mx-1" />
          </Link>
          <Link to="/" className="btn btn-light text-white me-3 bg-google">
            <i className="bi bi-google mx-1" />
          </Link>
        </div>
      </div>
    </form>
  );
};

export default compose(
  reduxForm({
    form: "signup",
  })
)(SignUpForm);
