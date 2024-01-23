import styled from 'styled-components';
import font from '../../../styles/font';
import color from '../../../styles/color';

export const ReviewContainer = styled.div`
  width: 32.8rem;
  height: 15rem;
  margin: 1.6rem 0 0 1.6rem;
  border: 1px solid ${color.grayscale_be};
  border-radius: 0.6rem;
  padding: 1.2rem;
`;

export const ArtInfoWrapper = styled.div`
  display: flex;
`;

export const ArtWorkImage = styled.img`
  width: 6.4rem;
  height: 6.4rem;
`;

export const ArtInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.2rem;
  margin-top: 2.8rem;
`;

export const ArtWorkArtist = styled.p`
  ${font.regular_10};
  color: ${color.grayscale_6c};
  margin-bottom: 0.4rem;
`;

export const ArtWorkName = styled.p`
  ${font.medium_13};
  width: 20rem;
  display: flex;
`;

export const RightButton = styled.img`
  width: 1.8rem;
  height: 1.8rem;
  margin-top: -0.2rem;
`;

export const EditDeleteButton = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  margin-right: 1.2rem;
  margin-top: -0.5rem;
`;

export const ReviewText = styled.p`
  ${font.regular_12};
  margin-top: 1rem;
`;

export const ReviewDate = styled.p`
  ${font.regular_12};
  color: ${color.grayscale_88};
  margin-top: 0.4rem;
`;

export const DropdownMenu = styled.div`
  width: 7rem;
  height: 5rem;
  border: 1px solid ${color.grayscale_ea};
  border-radius: 0.6rem;
  margin-left: 24rem;
  margin-top: -4.3rem;
`;

export const DropdownItem = styled.div`
  ${font.regular_12};
  color: ${color.grayscale_11};
  width: 4.2rem;
  height: 1.2rem;
  margin: 0.8rem 1.8rem 0 1.4rem;
`;
