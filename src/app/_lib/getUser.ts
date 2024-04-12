import { QueryFunction } from '@tanstack/query-core';
import { User } from '../_types/User';

const getUser: QueryFunction<User, [_1: string, _2: string]> = async ({ queryKey }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_1, username] = queryKey;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${username}`, {
    credentials: 'include',
    cache: 'no-store',
  });
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

export default getUser;
