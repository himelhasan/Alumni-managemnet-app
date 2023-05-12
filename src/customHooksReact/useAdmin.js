import { useEffect, useState } from "react";
import { useGetIsAdminQuery } from "../features/Api/apiSlice";

const useAdmin = (email) => {
  const { data, isLoading, isError } = useGetIsAdminQuery(email);
  const [isAdmin, setAdmin] = useState(false);
  const [isAdminLoading, setUseAdminLoading] = useState(true);

  useEffect(() => {
    if (email !== null || email !== undefined) {
      if (!isLoading && !isError) {
        setAdmin(data.isAdmin);
        console.log("data.isAdmin", data.isAdmin);
        setUseAdminLoading(false);
      }
    }
  }, [data, email, isError, isLoading]);

  return [isAdmin, isAdminLoading];
};

export default useAdmin;
