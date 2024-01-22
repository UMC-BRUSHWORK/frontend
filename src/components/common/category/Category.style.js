import styled from 'styled-components';
import { Chip } from '@mui/material';

export const Title = styled.div`
  color: #000;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 1rem;
  margin-bottom: 1rem;
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

export const CustomChip = styled(Chip)`
  font-size: 1.4rem;
  font-weight: 500;
  line-height: normal;
  text-align: center;
  height: 3rem;
  padding: 1rem;
  margin: 10rem;

  &.MuiChip-colorPrimary {
    background-color: #4812a3;
    color: white;
  }
`;
