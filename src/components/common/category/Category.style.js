import styled from 'styled-components';

export const Title = styled.div`
  color: #000;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 1rem;
  margin-bottom: 1.2rem;
`;

export const ChipTop = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
`;

export const ChipBottom = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Chip = styled.div`
  display: flex;
  height: 2.9rem;
  padding: 0.5rem 1.2rem;
  justify-content: center;
  align-items: center;
  margin-right: 0.6rem;
  border-radius: 1.45rem;
  background-color: ${(props) => (props.clicked ? '#4812A3' : '#F5F5F5')};
  color: black;
  color: ${(props) => (props.clicked ? '#FFFFFF' : 'black')};
  cursor: pointer;
`;