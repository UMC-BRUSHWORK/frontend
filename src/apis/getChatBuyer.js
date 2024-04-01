import { GET } from './api';

export const getChatBuyer = async ({ authorId }) => {
  const { data } = await GET(`/chat/product-list/${authorId}`);
  console.log(data);
  return data;
};
