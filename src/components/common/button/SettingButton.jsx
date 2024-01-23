import React from 'react';
import { StyledSettingButton, SettingButtonImg } from './SettingButton.style';
import IMAGES from '../../../assets';

function SettingButton() {
  return (
    <StyledSettingButton>
      <SettingButtonImg src={IMAGES.settings} alt="setting-button-image" />
    </StyledSettingButton>
  );
}

export default SettingButton;
