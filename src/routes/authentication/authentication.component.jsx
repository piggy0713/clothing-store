import SignInForm from "../../components/signInForm/signinForm.component";
import SignUpForm from "../../components/signUpForm/signupForm.component";
import { AuthenticationContainer } from "./authentication.styles";

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />

      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
