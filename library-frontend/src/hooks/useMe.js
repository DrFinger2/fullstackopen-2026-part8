import { useQuery } from "@apollo/client/react";
import { GET_ME } from "../queries";

const useMe = () => {
  const { data, loading, error } = useQuery(GET_ME);
  return {
    user: data?.me ?? null,
    loading: loading,
    error: error,
  };
};

export default useMe;
