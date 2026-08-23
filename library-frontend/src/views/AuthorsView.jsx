import useAuthors from "../hooks/bookstore/useAuthors";
import useEditAuthor from "../hooks/bookstore/UseEditAuthors";
import AuthorTable from "../components/AuthorTable";
import EditAuthorForm from "../components/EditAuthorForm";
import Show from "../components/Show";
import useAuth from "../hooks/authentication/useAuth";
const AuthorsView = () => {
  const { isLoggedIn } = useAuth();
  const { authors, loading } = useAuthors();
  const { editAuthor } = useEditAuthor();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Authors</h2>
      <AuthorTable authors={authors} />

      <Show when={isLoggedIn}>
        <EditAuthorForm authors={authors} onEditAuthor={editAuthor} />
      </Show>
    </div>
  );
};

export default AuthorsView;
