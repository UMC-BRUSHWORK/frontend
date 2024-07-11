import { GET } from './api';

export const getMyReviewList = async (userId) => {
  const { data } = await GET(`review/list/${userId}`);
  return data;
};
