import useField from "../hooks/component/useField";

const RegisterForm = ({ onRegister, setError }) => {
  const username = useField("text");
  const favoriteGenre = useField("text");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await onRegister(username.field.value, favoriteGenre.field.value);
      username.reset();
      favoriteGenre.reset();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <div>
        <div>username</div>
        <input {...username.field} />
      </div>
      <div>
        <div>Favorite genre </div>
        <input {...favoriteGenre.field} />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
