import React from 'react';
import * as S from './Profile.style';
import IMAGES from '../../../assets/index';

export default function Profile({
  image = IMAGES.profile,
  nickname = '조소과 학생',
  introduce = '공방 창업을 준비하고 있는 조소과 학생입니다.',
}) {
  // 프로필 이미지가 없는 경우
  let imageUrl = image;
  if (image === null) {
    imageUrl = IMAGES.profile;
  }

  // 소개글이 없는 경우
  let introduction;
  introduction = introduce;
  if (introduce === null) {
    introduction = '소개글을 작성해주세요';
  }

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
