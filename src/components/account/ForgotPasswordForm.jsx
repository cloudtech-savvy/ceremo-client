import React from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { Link } from "react-router-dom";
import renderFormGroupField from "../../helpers/renderFormGroupField";
import {
  required,
  email,
} from "../../helpers/validation";
import { ReactComponent as IconEmail } from "bootstrap-icons/icons/envelope.svg";

const ForgotPasswordForm = (props) => {
  const { handleSubmit, submitting, onSubmit, submitFailed } = props;
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`needs-validation ${submitFailed ? "was-validated" : ""}`}
      noValidate
    >
      <Field
        name="email"
        type="email" // Change type to "email"
        label="Email"
        component={renderFormGroupField}
        placeholder="Enter your email address"
        icon={IconEmail} // You may replace IconEmail with appropriate email icon
        validate={[required,email]} // Add validation for email format
        required={true}
        className="mb-3"
      />
      <div className="d-grid">
        <button
          type="submit"
          className="btn btn-primary mb-3"
          disabled={submitting}
        >
          Submit
        </button>
      </div>
      <Link className="float-start" to="/account/signup" title="Sign Up">
        Create your account
      </Link>
      <Link className="float-end" to="/account/signin" title="Sign In">
        Sign In
      </Link>
    </form>
  );
};

export default compose(
  reduxForm({
    form: "forgotpassword",
  })
)(ForgotPasswordForm);
