import { AuthFormWrapper } from "./components/mainPage/AuthPageStyled";
import AuthForm from "./components/authForm/authForm.js";
import MainContainer from "./components/containers/mainContainer";

function App() {
  return (
    <MainContainer>
      <AuthFormWrapper>
        <AuthForm></AuthForm>
      </AuthFormWrapper>
    </MainContainer>
  );
}

export default App;
