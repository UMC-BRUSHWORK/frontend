import { GET } from './api';

export const getFavorite = async ({
  userId,
  token,
  cursorId = null,
  paging = 10,
}) => {
  let url = `/user/${userId}/like`;

  if (cursorId !== null) {
    url += `?cursorId=${cursorId}`;
  }

  if (paging !== null) {
    url += `${cursorId !== null ? '&' : '?'}paging=${paging}`;
  }

  const { data } = await GET(url, token);
  return data;
};
