import { GET } from './api';

export const getSearchProduct = async (categoryId) => {
  const { data } = await GET('/product/category/search', {
    params: { categoryId },
  });
  return data;
};
