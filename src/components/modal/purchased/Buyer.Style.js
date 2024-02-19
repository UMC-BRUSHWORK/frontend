import styled from 'styled-components';
import font from '../../../styles/font';
import color from '../../../styles/color';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 1.6rem;
    margin-left: 2.6rem;
`

export const RadioBtn = styled.input`
    -webkit-appearance: none; // 웹킷 브라우저에서 기본 스타일 제거
    -moz-appearance: none; // 모질라 브라우저에서 기본 스타일 제거 
    appearance: none; // 기본 브라우저에서 기본 스타일 제거
    width: 18px;
    height: 18px;
    border: 2px solid #ccc; // 체크되지 않았을 때의 테두리 색상
    border-radius: 50%;
    outline: none; // focus 시에 나타나는 기본 스타일 제거
    cursor: pointer;
    &:checked {
    background-color: white; // 체크 시 내부 원으로 표시될 색상
    border: 5px solid #8C4FF2; // 테두리가 아닌, 테두리와 원 사이의 색상
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
    color: ${color.grayscale_88};

`