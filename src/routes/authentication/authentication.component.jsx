import SignupForm from "../../components/signupForm/signupForm.component";
import SigninForm from "../../components/signinForm/signinForm.component";
import ".//authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SigninForm />

      <SignupForm />
    </div>
  );
};

export default Authentication;
