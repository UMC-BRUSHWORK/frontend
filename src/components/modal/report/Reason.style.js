import styled from 'styled-components';
import font from '../../../styles/font';
import color from '../../../styles/color';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 2.4rem;
`

export const RadioBtn = styled.input`
    &:checked {
    background-color: purple;
    border-color: purple;
    }
    margin-right: 1.2rem;
`

export const Text = styled.div`
    ${() => font.medium_14}
    color: ${color.grayscale_88};
`