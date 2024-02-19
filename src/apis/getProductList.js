import { GET } from './api';

export const getProductList = async ({ cursorId = null, paging = null, author = null }) => {
  let url = '/product/list';

  if (cursorId !== null) {
    url += `?cursorId=${cursorId}`;
  }

  if (paging !== null) {
    url += `${cursorId !== null ? '&' : '?'}paging=${paging}`;
  }

  if (author !== null) {
    url += `${author !== null ? '&' : '?'}author=${author}`
  }

  const { data } = await GET(url);
  return data;
};
