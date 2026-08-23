import LoginForm from "../components/LoginForm";
import useAuth from "../hooks/useAuth";

const LoginView = ({ setPage }) => {
  const { login } = useAuth();

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
