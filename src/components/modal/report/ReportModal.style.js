import styled from 'styled-components';
import font from '../../../styles/font';
import color from '../../../styles/color';

export const Wrapper = styled.div`
    width: 328px;
    height: 265px;
    flex-shrink: 0;
    border-radius: 6px;
    background: #FFF;
    box-shadow: 0px 1px 1.5px 0px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
`

export const Title = styled.div`
    ${() => font.medium_10}
    color: ${color.grayscale_88};
    text-align: center;
    margin: 1.6rem 0;
`

export const BtnWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1.2rem;
    margin-top: 1.4rem;
`
export const CancelBtn = styled.div`
    width: 13.4rem;
    height: 2.9rem;
    flex-shrink: 0;
    border-radius: 1.45rem;
    ${() => font.medium_14}
    background-color: ${color.grayscale_ea};
    display: flex;
    align-items: center;
    justify-content: center;
`

export const CompleteBtn = styled.div`
    width: 13.4rem;
    height: 2.9rem;
    flex-shrink: 0;
    border-radius: 1.45rem;
    ${() => font.medium_14}
    color: white;
    background-color: ${color.primary_dark};
    display: flex;
    align-items: center;
    justify-content: center;
`