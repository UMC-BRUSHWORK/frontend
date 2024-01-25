import { POST } from './api';

export const postOauthLogin = async ({ userEmail, userPassword }) => {
  const body = {
    userEmail,
    userPassword,
  };

  const { data } = await POST(`/auth/login`, body);
  return data;
};
