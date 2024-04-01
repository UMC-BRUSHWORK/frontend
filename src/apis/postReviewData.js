import { POST } from './api';

export const postReviewData = async (props) => {
  const body = props;
  const { data } = await POST(`/review/register`, body);
  return data;
};
