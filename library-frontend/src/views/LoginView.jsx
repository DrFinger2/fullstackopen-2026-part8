import LoginForm from "../components/LoginForm";
import useLogin from "../hooks/authentication/useLogin";
import useUser from "../hooks/authentication/useUser";

const LoginView = ({ setPage }) => {
  const { isLoggedIn } = useUser();
  const { login } = useLogin();
  if (isLoggedIn) {
    return null;
  }

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
