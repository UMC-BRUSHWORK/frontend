import { GET } from './api';

export const getArtistReviewList = async (userId, token) => {
  const { data } = await GET(`/review/list?userId=${userId}`, token);
  return data;
};
