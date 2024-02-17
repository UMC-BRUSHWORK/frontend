import { POST } from './api2';

export const postChatLog = async ({ roomId }) => {
  const body = {
    roomId,
  };
  console.log(body);

  const { data } = await POST(`/chat/chat-log`, body);
  console.log(data);
  return data;
};
