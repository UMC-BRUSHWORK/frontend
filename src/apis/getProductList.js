import { GET } from './api';

export const getProductList = async ({ cursorId = null, paging = null }) => {
  let url = '/product/list';

  if (cursorId !== null) {
    url += `?cursorId=${cursorId}`;
  }

  if (paging !== null) {
    url += `${cursorId !== null ? '&' : '?'}paging=${paging}`;
  }

  const { data } = await GET(url);
  console.log(data);
  return data;
};
