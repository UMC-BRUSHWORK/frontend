import { GET } from './api';

export const getPurchasedList = async (props) => {
  const { userId, type } = props;
  // type === 1 -> 구매내역
  // type === 0 -> 판매내역
  const { data } = await GET(`/user/${userId}/history?type=${type}`);
  return data;
};
