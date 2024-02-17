import { POST } from './api2';

export const postChatList = async ({ userId }) => {
  const body = {
    userId,
  };
  console.log(body);

  const { data } = await POST(`/chat/list`, body);
  console.log(data);
  return data;
};
