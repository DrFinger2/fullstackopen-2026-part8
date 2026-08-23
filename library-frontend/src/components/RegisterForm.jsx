import useField from "../hooks/component/useField";
import useError from "../hooks/component/useError";
import useSuccess from "../hooks/component/useSuccess";

const RegisterForm = ({ onRegister }) => {
  const username = useField("text");
  const favoriteGenre = useField("text");

  const error = useError();
  const success = useSuccess();

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
