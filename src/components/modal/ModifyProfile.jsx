import React, { useState } from 'react';
import * as M from './ModifyProfile.style';
import IMAGES from '../../assets';
import { patchUserInfo } from '../../apis/patchUserInfo';

function ModifyProfile({ userData, onClose }) {
  const [images, setImages] = useState();
  const [uploadImage, setUploadImage] = useState(
    userData.profile === 'null' ? IMAGES.profile : userData.profile,
  );
  const [userNickname, setNickname] = useState('');
  const [userIntroduce, setIntroduction] = useState('');

  const patchUser = async ({ newProfileData }) => {
    const res = await patchUserInfo({ newProfileData });
    localStorage.setItem('profile', res.result.userProfile);
    localStorage.setItem('nickname', res.result.userNickname);
    localStorage.setItem('introduce', res.result.userIntroduce);
    window.location.reload();
  };

  const onChangeImage = (e) => {
    const file = e.target.files[0];
    setImages(file);
    const imageUrl = URL.createObjectURL(file);
    setUploadImage(imageUrl);
  };

  const handleSave = () => {
    const formData = new FormData();
    formData.append('image', images);
    formData.append('userNickname', userNickname);
    formData.append('userIntroduce', userIntroduce);

    const userId = localStorage.getItem('userId');
    const newProfileData = {
      userId,
      formData,
    };

    patchUser({ newProfileData });
  };

  const placeholder =
    userData.introduce === null
      ? '소개글을 자유롭게 작성해주세요. (최대 300자)'
      : userData.introduce;

  const fileInput = React.useRef(null);
  const handleButtonClick = () => {
    fileInput.current.click();
  };

  return (
    <>
      <M.ModalBackground />
      <M.ModalWrapper>
        <M.ProfileContainer>
          <M.ProfileImage src={uploadImage} />
          <M.CameraBackground />
          <M.CameraIcon
            src={IMAGES.photo}
            onClick={() => handleButtonClick()}
          />
          <input
            type="file"
            accept="image/*"
            onChange={onChangeImage}
            ref={fileInput}
            style={{ display: 'none' }}
          />
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
