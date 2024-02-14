import { atom } from 'recoil';

export const loginState = atom({
  key: 'isLogin',
  default: false,
});
export const userState = atom({
  key: 'userState',
  default: {},
});
