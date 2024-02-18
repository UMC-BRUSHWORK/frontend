import { POST } from './api2';

export const postChatLog = async ({ roomId, paging = 25 }) => {
  const body = {
    roomId,
  };

  const { data } = await POST(`/chat/chat-log?paging=${paging}`, body);
  return data;
};
