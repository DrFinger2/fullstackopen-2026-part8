import LoginForm from "../components/LoginForm";
import useLogin from "../hooks/authentication/useLogin";
import useUser from "../hooks/authentication/useUser";

const LoginView = ({ setPage }) => {
  const { isLoggedIn } = useUser();
  const { login } = useLogin();

  if (isLoggedIn) {
    return null;
  }

  const setError = (message) => {
    console.error(`Error message: ${message}`);
  };
  const handleLogin = async (username, password) => {
    await login(username, password);
    setPage("authors");
  };

  return (
    <div>
      <h2>Login</h2>
      <LoginForm onLogin={handleLogin} setError={setError} />
    </div>
  );
};

export default LoginView;
