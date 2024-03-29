import React, { useState } from 'react';
import * as S from './SettingButton.style';
import IMAGES from '../../../assets';
import ModifyProfile from '../../modal/ModifyProfile';

function SettingButton({ userData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <S.StyledSettingButton onClick={openModal}>
        <S.SettingButtonImg src={IMAGES.settings} alt="setting-button-image" />
      </S.StyledSettingButton>
      {isModalOpen && (
        <ModifyProfile userData={userData} onClose={closeModal} />
      )}
    </>
  );
}

export default SettingButton;
