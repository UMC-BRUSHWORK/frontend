import React, { useState } from 'react';
import * as M from './ModifyProfile.style';
import profile from '../../assets/profile_image.png';
import camera from '../../assets/photo_camera.svg';

function ModifyProfile({ onSave, onClose }) {
  const [nickname, setNickname] = useState('');
  const [introduction, setIntroduction] = useState('');

  const handleSave = () => {
    const newProfileData = {
      nickname,
      introduction,
    };
    onSave(newProfileData);
  };

  return (
    <M.ModalWrapper>
      <M.ProfileContainer>
        <M.ProfileImage src={profile} />
        <M.CameraBackground />
        <M.CameraIcon src={camera} />
      </M.ProfileContainer>

      <M.Nickname
        placeholder="내 닉네임"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      <M.Separator />
      <M.Introduction
        placeholder="소개글을 자유롭게 작성해주세요. (최대 300자)"
        value={introduction}
        onChange={(e) => setIntroduction(e.target.value)}
      />

      <M.Separator />

      <M.ButtonContainer>
        <M.CancelButton onClick={onClose}>취소</M.CancelButton>
        <M.CompleteButton onClick={handleSave}>수정 완료</M.CompleteButton>
      </M.ButtonContainer>
    </M.ModalWrapper>
  );
}

export default ModifyProfile;
