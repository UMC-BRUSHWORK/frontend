import styled from "styled-components";
import { Chip } from '@mui/material';

export const Wrapper = styled.div`
    margin-left: 20px;
    margin-right: 20px;
`
export const Title = styled.div`
    font-size: 13px;
    font-weight: 600;
    margin-top: 1rem;
    margin-bottom: 1rem;
`
export const ChipTop = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 5px;
`
export const ChipBottom = styled.div`
    display: flex;
    flex-direction: row;
`

export const CustomChip = styled(Chip)`
    font-size: 14px;
    font-weight: 600;
    height: 3rem;
    padding: 1rem;
    margin: 10rem;

    &.MuiChip-colorPrimary {
        background-color: #4812A3;
        color: white;
    }
`;