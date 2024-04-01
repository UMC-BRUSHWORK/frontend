import { PATCH } from './api';

export const patchUserInfo = async ({ newProfileData }) => {
  const { userId, formData } = newProfileData;
  const { data } = await PATCH(`/user/${userId}`, formData);
  return data;
};
