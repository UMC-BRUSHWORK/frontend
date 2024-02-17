import { PATCH } from './api';

export const patchUserInfo = async ({ newProfileData }) => {
  const { token, userId, userNickname, userIntroduce } = newProfileData;
  const body = {
    userNickname,
    userIntroduce,
  };
  //   console.log(token);
  //   console.log(userId, body);
  const { data } = await PATCH(`/user/${userId}`, body, token);
  return data;
};
