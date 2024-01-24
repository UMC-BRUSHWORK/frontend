import { POST } from './api';

export const postOAuthLogin = async () => {
  const { data } = await POST(`/auth/login`, body);
  return data;
};
