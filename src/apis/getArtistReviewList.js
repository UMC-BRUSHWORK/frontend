import { GET } from './api';

export const getArtistReviewList = async (userId) => {
  const { data } = await GET(`/review/list?userId=${userId}`);
  return data;
};
