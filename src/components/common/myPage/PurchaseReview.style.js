import styled from 'styled-components';
import color from '../../../styles/color';
import font from '../../../styles/font';

export const PurchaseReviewContainer = styled.div`
  border-radius: 6px;
  border: 1px solid ${color.grayscale_be};
  background: ${color.white};
  width: 29.6rem;
  min-width: 29.6rem;
  height: 7.4rem;
  margin-right: 1.2rem;
  margin-top: 1rem;
`;

export const ContextWrapper = styled.div`
  padding: 1.2rem;
`;

export const NicknameAndDate = styled.div`
  ${() => font.regular_10};
  color: ${color.grayscale_88};
  margin-top: 0.2rem;
`;

export const ReviewText = styled.div`
  ${() => font.regular_12};
  color: ${color.black};
  margin-top: 0.8rem;
  max-height: 2.7rem;
  text-align: justify;
  text-overflow: ellipsis;
  overflow-y: hidden;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
