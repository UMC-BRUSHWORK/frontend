import { PATCH } from './api';

export const patchUserInfo = async ({ newProfileData }) => {
  const { token, userId, formData } = newProfileData;
  const { data } = await PATCH(`/user/${userId}`, formData, token);
  return data;
};
