/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import * as S from './ArtWork.style';
import IMAGES from '../../../assets';

export default function ArtWork({
  artSrc = 'artWork2',
  artName = '작품 이름',
  artist = '작가명',
}) {
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const [componentSize, setComponentSize] = useState({
    width: 'auto',
    height: 'auto',
  });

  const imgSrc = IMAGES[artSrc];

  useEffect(() => {
    const img = new Image();
    img.src = imgSrc;
    img.onload = () => {
      const { width } = img;
      const { height } = img;
      setImageSize({ width, height });
    };
  }, []);

  useEffect(() => {
    // 이미지 비율에 따라 컴포넌트 크기 동적으로 조정
    const aspectRatio = imageSize.width / imageSize.height;

    if (aspectRatio >= 1) {
      // 이미지가 가로 방향으로 더 넓은 경우
      setComponentSize({ width: '80%', height: 'auto' });
    } else {
      // 이미지가 세로 방향으로 더 긴 경우
      setComponentSize({ width: 'auto', height: '80%' });
    }
  }, [imageSize]);

  return (
    <S.Wrapper width={componentSize.width} height={componentSize.height}>
      <S.Image src={imgSrc} alt="artWork" />
      <S.ArtName>{artName}</S.ArtName>
      <S.Artist>{artist}</S.Artist>
    </S.Wrapper>
  );
}
