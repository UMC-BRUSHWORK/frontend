import styled from 'styled-components';
import font from '../../../styles/font';
// import color from '../../../styles/color';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 1.6rem;
    margin-left: 2.6rem;
`

export const RadioBtn = styled.input`
    &:checked {
    background-color: purple;
    border-color: purple;
    }
    margin-right: 2rem;
`

export const Profile = styled.img`
    width: 4rem;
    height: 4rem;
    flex-shrink: 0;
    border: 1px solid var(--Grayscale-EA, #EAEAEA);
    border-radius: 40px;
    margin-right: 1.2rem;
`

export const NameWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
`

export const Name = styled.div`
    ${() => font.medium_17}
`

export const LastChat = styled.div`
    ${() => font.medium_14}
`