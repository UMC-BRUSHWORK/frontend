import React from 'react';
import settingBtn from '../../../assets/images/settings.svg';
import { StyledSettingButton, SettingButtonImg } from './SettingButton.style';

function SettingButton() {
  return (
    <StyledSettingButton>
      <SettingButtonImg src={settingBtn} alt="setting-button-image" />
    </StyledSettingButton>
  );
}

export default SettingButton;
