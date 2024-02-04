import { POST } from './api';

export const postRegister = async ({
  userEmail,
  userPassword,
  userNickname,
  userName,
  userPhone,
}) => {
  const body = {
    userEmail,
    userPassword,
    userNickname,
    userName,
    userPhone,
  };
  console.log(body);

  const { data } = await POST(`/auth/register`, body);
  console.log(data);
  return data;
};
