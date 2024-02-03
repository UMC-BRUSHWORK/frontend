import { POST } from './api';

export const postOauthLogin = async ({ userEmail, userPassword }) => {
  const body = {
    userEmail,
    userPassword,
  };
  console.log(body);

  const { data } = await POST(`/auth/login`, body);
  console.log(data);
  return data;
};
