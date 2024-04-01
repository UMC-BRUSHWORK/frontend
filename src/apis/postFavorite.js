import { POST } from './api';

export const postFavorite = async ({ userId, PID }) => {
  const body = null;
  const { data } = await POST(`/user/${userId}/like?productId=${PID}`, body);
  return data;
};
