import { PATCH } from './api';

export const patchDeal = async ({ productId, consumerId, authorId }) => {
  const body = {
    productId,
    consumerId,
    authorId,
  };
  const { data } = await PATCH(`/product/deal`, body);
  return data;
};
