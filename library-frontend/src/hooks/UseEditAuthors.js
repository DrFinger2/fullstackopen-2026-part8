// hooks/useEditAuthor.js
import { useMutation } from "@apollo/client/react";
import { EDIT_AUTHOR, GET_ALL_AUTHORS } from "../queries";

const useEditAuthor = () => {
  const [editAuthorMutation, result] = useMutation(EDIT_AUTHOR, {
    refetchQueries: [{ query: GET_ALL_AUTHORS }],
  });

  const editAuthor = async ({ name, setToBeBorn }) => {
    const { data } = await editAuthorMutation({
      variables: {
        name: String(name),
        setBornTo: Number(setToBeBorn),
      },
    });
    return data.editAuthor;
  };

  return {
    editAuthor: editAuthor,
    loading: result.loading,
    error: result.error,
    data: result.data,
  };
};

export default useEditAuthor;
