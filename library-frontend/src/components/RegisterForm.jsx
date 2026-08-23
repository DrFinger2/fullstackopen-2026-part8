import useField from "../hooks/useField";
import useNotification from "../hooks/useNotification";
const RegisterForm = ({ onRegister }) => {
  const username = useField("text");
  const favoriteGenre = useField("text");

  const { error, success } = useNotification();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await onRegister(username.field.value, favoriteGenre.field.value);
      username.reset();
      favoriteGenre.reset();
      success("Registration successful!");
    } catch (er) {
      error(er.message);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <div>
        <label>username</label>
        <input {...username.field} />
      </div>
      <div>
        <label>Favorite genre </label>
        <input {...favoriteGenre.field} />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
