import { POST } from './api';

export const postProduct = async ({ formData, token }) => {
  const { data } = await POST(`/product/register`, formData, token);
  return data;
};
