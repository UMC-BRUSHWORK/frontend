import styled from 'styled-components';
import font from '../../../styles/font';
import color from '../../../styles/color';

export const ArtInfoWrapper = styled.div``;

export const ArtworkImageContainer = styled.div`
  border: 1px solid ${color.grayscale_be};
  border-radius: 4px;
  width: 32.8rem;
  height: 24.6rem;
  overflow: hidden;
`;

export const ArtworkImage = styled.img`
 width: 100%,
 height: 100%,
 object-fit: cover;
`;

export const ArtName = styled.h1`
  color: ${color.black};
  ${() => font.medium_17}
  margin-top: 1.6rem;
`;

export const ArtistName = styled.p`
  color: ${color.grayscale_88};
  ${() => font.medium_14}
  margin-top: 0.4rem;
`;

export const ArtPrice = styled.p`
  color: ${color.black};
  ${() => font.medium_17}
  margin-top: 0.8rem;
`;
