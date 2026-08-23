import RegisterForm from "../components/RegisterForm";
import useRegister from "../hooks/authentication/useRegister";

const RegisterView = ({ setPage }) => {
  const { register } = useRegister();

  const handleRegister = async (username, favoriteGenre) => {
    await register(username, favoriteGenre);
    setPage("login");
  };

  return (
    <div>
      <h2>Register</h2>
      <RegisterForm onRegister={handleRegister} />
    </div>
  );
};

export default RegisterView;
