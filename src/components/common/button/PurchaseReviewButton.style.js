import styled from 'styled-components';
import font from '../../../styles/font';
import color from '../../../styles/color';

export const PurchaseContainer = styled.div`
  display: flex;
`;
export const GoArtistButton = styled.button`
  color: ${color.black};
  ${() => font.medium_14}
  border: none;
  cursor: pointer;
  background-color: transparent;
`;

export const RightButton = styled.img`
  width: 1.8rem;
  height: 1.8rem;
  cursor: pointer;
`;
