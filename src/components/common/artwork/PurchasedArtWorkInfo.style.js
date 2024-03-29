import styled from 'styled-components';
import font from '../../../styles/font';
import color from '../../../styles/color';

export const PurchasedArtInfoWrapper = styled.div`
  display: flex;
  margin-top: 1.7rem;
  margin-left: 1.6rem;
`;

export const PurchasedArtworkImage = styled.img`
  border-radius: 5px;
  width: 8.8rem;
  height: 8.8rem;
`;

export const PurchasedArtWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.2rem;
`;

export const PurchasedArtName = styled.h1`
  color: ${color.black};
  ${() => font.medium_13}
  margin-top: 0.4rem;
`;

export const PurchasedArtistName = styled.p`
  color: ${color.grayscale_6c};
  ${() => font.regular_10}
  margin-top: 0.2rem;
`;

export const PurchasedArtPrice = styled.p`
  color: ${color.black};
  ${() => font.regular_12}
  margin-top: 0.2rem;
  margin-bottom: 1.8rem;
`;
