import SignInForm from "../../components/sign-in-form/sign-in.component";
import SignUpForm from "../../components/sign-up-form/sign-up.component";
import "./authentication.styles.scss";

import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

const Authentication = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    await createUserDocumentFromAuth(response.user);
  };

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
