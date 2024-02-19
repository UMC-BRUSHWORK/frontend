import styled from 'styled-components';
import font from '../../../styles/font';
import color from '../../../styles/color';

export const ArtWorkContainer = styled.div`
  display: flex;
`;

export const GoArtistButton = styled.button`
  color: ${color.black};
  ${() => font.medium_14}
  border: none;
  cursor: pointer;
  background-color: transparent;
  padding: 0;
  margin-right: 0.4rem;
  margin-bottom: 1rem;
`;

export const RightButton = styled.img`
  width: 1.6rem;
  height: 1.6rem;
  cursor: pointer;
`;
