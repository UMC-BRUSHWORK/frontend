import { POST } from './api2';

export const postChatList = async ({ userId, paging = 15 }) => {
  const body = {
    userId,
  };

  const { data } = await POST(`/chat/list?paging=${paging}`, body);
  return data;
};
