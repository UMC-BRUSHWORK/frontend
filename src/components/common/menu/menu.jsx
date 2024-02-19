import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as M from './menu.style';
import IMAGES from '../../../assets';

function MenuItem({ icon, text, onClick }) {
  return (
    <M.ButtonWrapper>
      <M.ImgButton src={icon} onClick={onClick} />
      <M.GoPageButton onClick={onClick}>{text}</M.GoPageButton>
    </M.ButtonWrapper>
  );
}

function Menu() {
  const navigate = useNavigate();

  const handleMoveToPurchased = () => {
    navigate('/my-history');
  };

  const handleMoveToMyReview = () => {
    navigate('/my-history');
  };

  const handleMoveToSettings = () => {
    navigate('/settings');
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <>
      <M.MenuContainer>
        <M.Line />
        <MenuItem
          icon={IMAGES.shoppingBag}
          text="구매 내역"
          onClick={handleMoveToPurchased}
        />
        <M.GrayLine />
        <MenuItem
          icon={IMAGES.contract}
          text="내가 쓴 후기"
          onClick={handleMoveToMyReview}
        />
        <M.Line />
      </M.MenuContainer>

      <M.MenuContainer>
        <M.Line />
        <MenuItem
          icon={IMAGES.accountBox}
          text="계정 관리"
          onClick={handleMoveToSettings}
        />
        <M.GrayLine />
        <MenuItem icon={IMAGES.logout} text="로그아웃" onClick={handleLogout} />
        <M.Line />
      </M.MenuContainer>
    </>
  );
}

export default Menu;
