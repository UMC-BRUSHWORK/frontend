import { GET } from './api';

export const getProduct = async (productId) => {
  const { data } = await GET(`/product/${productId}`);
  return data;
};
