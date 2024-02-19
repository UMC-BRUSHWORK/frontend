import styled from 'styled-components';
import font from '../../../styles/font';
import color from '../../../styles/color';

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
    width: 328px;
    max-height: 265px;
    overflow-y: auto;
    flex-shrink: 0;
    border-radius: 6px;
    background: #FFF;
    box-shadow: 0px 1px 1.5px 0px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 25%;
`

export const Title = styled.div`
    ${() => font.medium_10}
    color: ${color.grayscale_88};
    text-align: center;
    margin: 1.6rem 0 4rem 0;
`

export const Divider = styled.div`
    width: 280px;
    height: 1px;
    background: #EAEAEA;
    margin-bottom: 1.6rem;
    align-self: center;
`

export const NoChat = styled.div`
    display: flex;
    justify-content: center;
    ${() => font.medium_13}
    position: sticky;
    top: 40%;
`
export const BtnWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1.2rem;
    margin-top: 1.4rem;
    position: sticky;
    top: 82%;
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