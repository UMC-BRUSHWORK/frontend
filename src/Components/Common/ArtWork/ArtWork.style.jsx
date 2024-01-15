import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  min-width: 9rem;
  max-width: 16rem;
  max-height: 12rem;
`;

export const Image = styled.img`
  /* min-width: 9rem;
  max-width: 16rem;
  max-height: 12rem; */
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
