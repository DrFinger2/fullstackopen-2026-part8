import { useState } from "react";
import AuthorsView from "./views/AuthorsView";
import BooksView from "./views/BooksView";
import NewBookView from "./views/NewBookView";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import useUser from "./hooks/authentication/useUser";

const App = () => {
  const [page, setPage] = useState("authors");
  const { isLoggedIn } = useUser();

  return (
    <div>
      <div>
        <button onClick={() => setPage("authors")}>Authors</button>
        <button onClick={() => setPage("books")}>Books</button>
        <button onClick={() => setPage("add")}>Add book</button>
        <button onClick={() => setPage("login")}>Login</button>
        <button onClick={() => setPage("register")}>Register</button>
      </div>

      <AuthorsView show={page === "authors"} />
      <BooksView show={page === "books"} />
      <NewBookView show={page === "add" && isLoggedIn} />
      <LoginView show={page === "login" && !isLoggedIn} />
      <RegisterView show={page === "register" && !isLoggedIn} />
    </div>
  );
};

export default App;
