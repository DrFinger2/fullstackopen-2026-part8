import LoginForm from "../components/LoginForm";
import useLogin from "../hooks/authentication/useLogin";

const LoginView = ({ setPage }) => {
  const { login } = useLogin();

  const handleLogin = async (username, password) => {
    await login(username, password);
    setPage("authors");
  };

  return (
    <div>
      <h2>Login</h2>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginView;
