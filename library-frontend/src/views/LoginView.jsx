import LoginForm from "../components/LoginForm";
import useLogin from "../hooks/authentication/useLogin";
const LoginView = ({ show }) => {
  const { login } = useLogin();

  if (!show) {
    return null;
  }

  const setError = (message) => {
    console.error(`Error message: ${message}`);
  };

  return (
    <div>
      <h2>Login</h2>
      <LoginForm onLogin={login} setError={setError} />
    </div>
  );
};

export default LoginView;
