import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-bottom: 0.5rem;
`;

export const ArtName = styled.div`
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  margin-bottom: 0.2rem;
`;

export const Artist = styled.div`
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
