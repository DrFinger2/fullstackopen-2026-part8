import useField from "../hooks/useField";
import useNotification from "../hooks/useNotification";

const LoginForm = ({ onLogin }) => {
  const username = useField("text");
  const password = useField("password");

  const { success, error } = useNotification();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await onLogin(username.field.value, password.field.value);
      username.reset();
      password.reset();

      success("Login successful!");
    } catch (er) {
      error(er.message);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <div>username</div>
        <input {...username.field} />
      </div>
      <div>
        <div>password</div>
        <input {...password.field} />
      </div>
      <button type="submit">login</button>
    </form>
  );
};

export default LoginForm;
