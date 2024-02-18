import { POST } from './api2';

export const postChatLog = async ({ roomId }) => {
  const body = {
    roomId,
  };

  // const { data } = await POST(`/chat/chat-log`, body);
  const { data } = await POST(`/chat/chat-log?paging=40`, body);
  return data;
};
