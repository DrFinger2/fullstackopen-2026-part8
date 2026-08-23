import useAuthors from "../hooks/bookstore/useAuthors";
import useEditAuthor from "../hooks/bookstore/UseEditAuthors";
import AuthorTable from "../components/AuthorTable";
import EditAuthorForm from "../components/EditAuthorForm";

const AuthorsView = (props) => {
  const { authors, loading } = useAuthors();
  const { editAuthor } = useEditAuthor();

  if (!props.show) {
    return null;
  }
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>authors</h2>
      <AuthorTable authors={authors} />
      <EditAuthorForm authors={authors} onEditAuthor={editAuthor} />
    </div>
  );
};

export default AuthorsView;
