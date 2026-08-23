const Button = ({ onClick, children, show = true }) => {
  if (!show) {
    return null;
  } else {
    return <button onClick={onClick}>{children}</button>;
  }
};

export default Button;
