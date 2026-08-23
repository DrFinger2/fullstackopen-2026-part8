import { useState } from "react";
import AuthorsView from "./views/AuthorsView";
import BooksView from "./views/BooksView";
import NewBookView from "./views/NewBookView";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import Notification from "./components/Notification";
import RecommendView from "./views/RecommendView";

import Show from "./components/Show";
import useAuth from "./hooks/useAuth";
import useNotification from "./hooks/useNotification";

const pages = {
  authors: AuthorsView,
  books: BooksView,
  add: NewBookView,
  login: LoginView,
  register: RegisterView,
  recommend: RecommendView,
};

const App = () => {
  const { type, message, idx } = useNotification();
  const { isLoggedIn, logout } = useAuth();
  const [page, setPage] = useState("authors");
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
          <button onClick={() => setPage("recommend")}>Recommend</button>
          <button onClick={handleLogout}>Logout</button>
        </Show>

        <Show when={!isLoggedIn}>
          <button onClick={() => setPage("login")}>Login</button>
          <button onClick={() => setPage("register")}>Register</button>
        </Show>
      </div>

      <Notification message={message} type={type} idx={idx} />
      <Page setPage={setPage} />
    </div>
  );
};

export default App;
