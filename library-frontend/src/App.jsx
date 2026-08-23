import { useState } from "react";
import AuthorsView from "./views/AuthorsView";
import BooksView from "./views/BooksView";
import NewBookView from "./views/NewBookView";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import useUser from "./hooks/authentication/useUser";
import Show from "./components/Show";
import useLogout from "./hooks/authentication/useLogout";

const pages = {
  authors: AuthorsView,
  books: BooksView,
  add: NewBookView,
  login: LoginView,
  register: RegisterView,
};

const App = () => {
  const [page, setPage] = useState("authors");
  const { isLoggedIn } = useUser();
  const { logout } = useLogout();
  const Page = pages[page];

  const handleLogout = () => {
    logout();
    setPage("authors");
  };

  return (
    <div>
      <div>
        <button onClick={() => setPage("authors")}>Authors</button>
        <button onClick={() => setPage("books")}>Books</button>

        <Show when={isLoggedIn}>
          <button onClick={() => setPage("add")}>Add book</button>
          <button onClick={handleLogout}>Logout</button>
        </Show>

        <Show when={!isLoggedIn}>
          <button onClick={() => setPage("login")}>Login</button>
          <button onClick={() => setPage("register")}>Register</button>
        </Show>
      </div>

      <Page setPage={setPage} />
    </div>
  );
};

export default App;
