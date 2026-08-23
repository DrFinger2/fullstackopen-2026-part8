import useField from "../hooks/component/useField";

const LoginForm = ({ onLogin, setError }) => {
  const username = useField("text");
  const password = useField("password");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await onLogin(username.field.value, password.field.value);
      username.reset();
      password.reset();
    } catch (error) {
      setError(error.message);
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
