import { GET } from './api';

export const getFavorite = async ({
  userId,
  cursorId = null,
  paging = null,
}) => {
  let url = `/user/${userId}/like`;

  if (cursorId !== null) {
    url += `?cursorId=${cursorId}`;
  }

  if (paging !== null) {
    url += `${cursorId !== null ? '&' : '?'}paging=${paging}`;
  }
  console.log(url);
  console.log(userId);
  const { data } = await GET(url);
  return data;
};
