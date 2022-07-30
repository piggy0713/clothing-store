import SignInForm from "../../components/signinForm/signinForm.component";
import SignUpForm from "../../components/signupForm/signupForm.component";
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
