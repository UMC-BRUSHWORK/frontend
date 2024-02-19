import { POST } from './api';

export const postReviewData = async (props, token) => {
  const body = props;
  const { data } = await POST(`/review/register`, body, token);
  return data;
};
