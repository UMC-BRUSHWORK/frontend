import React from 'react';
import * as S from './Profile.style';
import IMAGES from '../../../assets/index';

export default function Profile({ image, nickname, introduce }) {
  // 프로필 이미지가 없는 경우
  const imageUrl = image === null ? IMAGES.profile : image;

  // 소개글이 없는 경우
  const introduction = introduce === '' ? '소개글을 작성해주세요' : introduce;

  return (
    <S.Wrapper>
      <S.Profile src={imageUrl} />
      <S.Detail>
        <S.Name>{nickname}</S.Name>
        <S.Info>{introduction}</S.Info>
      </S.Detail>
    </S.Wrapper>
  );
}
