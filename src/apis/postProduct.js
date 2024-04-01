import { POST } from './api';

export const postProduct = async ({ formData }) => {
  const { data } = await POST(`/product/register`, formData);
  return data;
};
