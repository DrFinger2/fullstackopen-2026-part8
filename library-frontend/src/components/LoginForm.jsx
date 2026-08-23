import useField from "../hooks/component/useField";
import useError from "../hooks/component/useError";
import useSuccess from "../hooks/component/useSuccess";

const LoginForm = ({ onLogin }) => {
  const username = useField("text");
  const password = useField("password");

  const error = useError();
  const success = useSuccess();

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
