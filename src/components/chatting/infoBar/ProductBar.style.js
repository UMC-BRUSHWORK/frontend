import styled from 'styled-components';
import color from '../../../styles/color';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 7.2rem;
  border-bottom: 1px solid #e8e8e8;
  padding: 1.6rem;
`;
export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const ProductImg = styled.img`
  width: 4rem;
  height: 4rem;
  margin-right: 1.6rem;
`;
export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Name = styled.div`
  font-family: Pretendard;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 0.2rem;
`;
export const Price = styled.div`
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
`;
export const Status = styled.div`
  height: 2.9rem;
  padding: 0.5rem 1.2rem 0.3rem 1.2rem;
  justify-content: center;
  align-items: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  border-radius: 1.4rem;
  color: ${(props) => (props.$status ? color.black : color.white)};
  background: ${(props) =>
    props.$status ? color.grayscale_be : color.primary_normal};
`;
