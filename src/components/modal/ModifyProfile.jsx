import React, { useState } from 'react';
import * as M from './ModifyProfile.style';
import IMAGES from '../../assets';
import { patchUserInfo } from '../../apis/patchUserInfo';

function ModifyProfile({ userData, onClose }) {
  const [userNickname, setNickname] = useState('');
  const [userIntroduce, setIntroduction] = useState('');

  const patchUser = async ({ newProfileData }) => {
    const res = await patchUserInfo({ newProfileData });
    localStorage.setItem('introduce', res.result.userIntroduce);
    window.location.reload();
  };

  const handleSave = () => {
    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('token');
    const newProfileData = {
      token,
      userId,
      userNickname,
      userIntroduce,
    };

    patchUser({ newProfileData });
  };

  const placeholder =
    userData.introduce === ''
      ? '소개글을 자유롭게 작성해주세요. (최대 300자)'
      : userData.introduce;

  return (
    <>
      <M.ModalBackground />
      <M.ModalWrapper>
        <M.ProfileContainer>
          <M.ProfileImage src={IMAGES.profile} />
          <M.CameraBackground />
          <M.CameraIcon src={IMAGES.photo} />
        </M.ProfileContainer>

        <M.Nickname
          placeholder={userData.nickname}
          value={userNickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <M.Separator />
        <M.Introduction
          placeholder={placeholder}
          value={userIntroduce}
          onChange={(e) => setIntroduction(e.target.value)}
        />

        <M.Separator />

        <M.ButtonContainer>
          <M.CancelButton onClick={onClose}>취소</M.CancelButton>
          <M.CompleteButton onClick={handleSave}>수정 완료</M.CompleteButton>
        </M.ButtonContainer>
      </M.ModalWrapper>
    </>
  );
}

export default ModifyProfile;
