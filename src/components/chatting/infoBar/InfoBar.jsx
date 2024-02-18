import React from 'react';
import { AiOutlineArrowLeft, AiOutlineAlert } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import * as I from './InfoBar.style';

export default function InfoBar({ info }) {
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');
  const name =
    info.buyerId === Number(userId) ? info.sellerNickname : info.buyerNickname;
  console.log(name);
  const clickBack = () => {
    navigate(`/chatting-list`);
  };
  return (
    <I.Wrapper>
      <I.Container>
        <AiOutlineArrowLeft
          size={16}
          onClick={clickBack}
          style={{ cursor: 'pointer' }}
        />
        <I.Name>{name}</I.Name>
      </I.Container>
      <I.Container>
        <AiOutlineAlert size={24} />
      </I.Container>
    </I.Wrapper>
  );
}
