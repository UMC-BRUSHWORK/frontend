import { POST } from './api';

export const postFavorite = async ({ userId, PID }) => {
  console.log(userId, PID);
  const { data } = await POST(`/user/${userId}/like?productId=${PID}`);
  return data;
};
