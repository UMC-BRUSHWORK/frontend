import { GET } from './api';

export const getMyReviewList = async (userId, token) => {
  const { data } = await GET(`review/list/${userId}`, token);
  return data;
};
