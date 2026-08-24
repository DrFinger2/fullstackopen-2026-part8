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
  const { type, message, idx, clear } = useNotification();
  const { isLoggedIn, logout } = useAuth();
  const [page, setPage] = useState("authors");
  const Page = pages[page];

  const navigate = (nextPage) => {
    clear();
    setPage(nextPage);
  };

  const handleLogout = () => {
    logout();
    navigate("authors");
  };

  return (
    <div>
      <div>
        <button onClick={() => navigate("authors")}>Authors</button>
        <button onClick={() => navigate("books")}>Books</button>

        <Show when={isLoggedIn}>
          <button onClick={() => navigate("add")}>Add book</button>
          <button onClick={() => navigate("recommend")}>Recommend</button>
          <button onClick={handleLogout}>Logout</button>
        </Show>

        <Show when={!isLoggedIn}>
          <button onClick={() => navigate("login")}>Login</button>
          <button onClick={() => navigate("register")}>Register</button>
        </Show>
      </div>

      <Notification message={message} type={type} idx={idx} />
      <Page setPage={navigate} />
    </div>
  );
};

export default App;
