import styled from 'styled-components';
import color from '../../../styles/color';
import font from '../../../styles/font';

export const PurchaseReviewContainer = styled.div`
  border-radius: 6px;
  border: 1px solid ${color.grayscale_be};
  background: ${color.white};
  width: 29.6rem;
  height: 100%;
  max-height: 7.4rem;
  padding: 1.2rem;
  margin-top: 1rem;
  margin-right: 1.2rem;
  margin-bottom: 0.7rem;
`;

export const NicknameAndDate = styled.div`
  ${() => font.regular_10};
  color: ${color.grayscale_88};
`;

export const ReviewText = styled.div`
  ${() => font.regular_12};
  color: ${color.black};
  margin-top: 0.8rem;
  overflow: hidden;
  text-align: justify;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
