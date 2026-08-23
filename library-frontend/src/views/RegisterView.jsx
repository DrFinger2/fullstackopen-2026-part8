import RegisterForm from "../components/RegisterForm";
import useRegister from "../hooks/authentication/useRegister";

const RegisterView = ({ show }) => {
  const { register } = useRegister();

  if (!show) {
    return null;
  }

  const setError = (message) => {
    console.error(`Error message: ${message}`);
  };

  return (
    <div>
      <h2>Register</h2>
      <RegisterForm onRegister={register} setError={setError} />
    </div>
  );
};

export default RegisterView;
