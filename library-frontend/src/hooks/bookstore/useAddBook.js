// hooks/useAddBook.js
import { useMutation } from "@apollo/client/react";
import { ADD_BOOK, GET_ALL_BOOKS, GET_ALL_AUTHORS } from "../../queries";

const useAddBook = () => {
  const [addBookMutation, result] = useMutation(ADD_BOOK, {
    refetchQueries: [{ query: GET_ALL_BOOKS }, { query: GET_ALL_AUTHORS }],
  });

  const addBook = async ({ title, author, published, genres }) => {
    const { data } = await addBookMutation({
      variables: {
        title: String(title),
        author: String(author),
        published: Number(published),
        genres: genres.map((genre) => String(genre)),
      },
    });
    return data.addBook;
  };

  return {
    addBook: addBook,
    loading: result.loading,
    error: result.error,
    data: result.data,
  };
};

export default useAddBook;
