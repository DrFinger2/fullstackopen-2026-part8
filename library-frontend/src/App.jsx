import { useState } from "react";
import AuthorsView from "./views/AuthorsView";
import BooksView from "./views/BooksView";
import NewBookView from "./views/NewBookView";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import useUser from "./hooks/authentication/useUser";
import Button from "./components/Button";
import useLogout from "./hooks/authentication/useLogout";
const App = () => {
  const [page, setPage] = useState("authors");
  const { isLoggedIn } = useUser();
  const { logout } = useLogout();

  return (
    <div>
      <div>
        <Button onClick={() => setPage("authors")}>Authors</Button>
        <Button onClick={() => setPage("books")}>Books</Button>
        <Button onClick={() => setPage("add")} show={isLoggedIn}>
          Add book
        </Button>
        <Button onClick={() => setPage("login")} show={!isLoggedIn}>
          Login
        </Button>
        <Button onClick={() => setPage("register")} show={!isLoggedIn}>
          Register
        </Button>
        <Button onClick={logout} show={isLoggedIn}>
          Logout
        </Button>
      </div>

      <AuthorsView show={page === "authors"} isLoggedIn={isLoggedIn} />
      <BooksView show={page === "books"} isLoggedIn={isLoggedIn} />
      <NewBookView show={page === "add"} isLoggedIn={isLoggedIn} />
      <LoginView show={page === "login"} isLoggedIn={isLoggedIn} />
      <RegisterView show={page === "register"} isLoggedIn={isLoggedIn} />
    </div>
  );
};

export default App;
