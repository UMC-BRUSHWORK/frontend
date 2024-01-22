import React from 'react';
import { useNavigate } from 'react-router-dom';
import PurchaseImg from '../../../assets/shopping_bag.svg';
import ReviewImg from '../../../assets/contract.svg';
import AccountImg from '../../../assets/account_box.svg';
import LogoutImg from '../../../assets/logout.svg';
import * as M from './menu.style';

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
    navigate('/purchased');
  };

  const handleMoveToMyReview = () => {
    navigate('/myReview');
  };

  const handleMoveToSettings = () => {
    navigate('/settings');
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <>
      <M.MenuContainer>
        <M.Line />
        <MenuItem
          icon={PurchaseImg}
          text="구매 내역"
          onClick={handleMoveToPurchased}
        />
        <M.GrayLine />
        <MenuItem
          icon={ReviewImg}
          text="내가 쓴 후기"
          onClick={handleMoveToMyReview}
        />
        <M.Line />
      </M.MenuContainer>

      <M.MenuContainer>
        <M.Line />
        <MenuItem
          icon={AccountImg}
          text="계정 관리"
          onClick={handleMoveToSettings}
        />
        <M.GrayLine />
        <MenuItem icon={LogoutImg} text="로그아웃" onClick={handleLogout} />
        <M.Line />
      </M.MenuContainer>
    </>
  );
}

export default Menu;
