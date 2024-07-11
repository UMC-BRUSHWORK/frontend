import { POST } from './api';

export const postCreateRoom = async ({ buyerId, sellerId, productId }) => {
  const body = {
    buyerId,
    sellerId,
    productId,
  };
  console.log(body);

  const { data } = await POST(`/chat/create-room`, body);
  console.log(data);
  return data;
};
