import { useQuery } from '@tanstack/react-query';

import { getUserDetails } from '@network/apiMethods';
import { userDetails } from '@constants/query';

function useUserQuery() {
  const { data, isFetching } = useQuery({
    queryKey: [userDetails],
    queryFn: () => getUserDetails(),
  });

  return { userDetails: data, isFetching };
}

export default useUserQuery;
