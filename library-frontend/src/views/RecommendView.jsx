import useMe from "../hooks/useMe";
import useBooks from "../hooks/useBooks";
import BookTable from "../components/BookTable";

const RecommendView = () => {
  const { user, loading: userLoading } = useMe();
  const { books, loading } = useBooks({ genre: user?.favoriteGenre });

  if (userLoading || loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Recommendations</h2>
      <p>
        books in your favorite genre:
        <div>
          <strong>{user.favoriteGenre}</strong>
        </div>
      </p>
      <BookTable books={books} />
    </div>
  );
};
export default RecommendView;
