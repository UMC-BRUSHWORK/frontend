import { GET } from './api';

export const getUserInfo = async (userId) => {
  const { data } = await GET(`/user/${userId}`);
  return data;
};
