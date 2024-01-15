import styled from 'styled-components';

export const Image = styled.div`
    width: 120px;
    height: 120px;
    flex-shrink: 0;
    border-radius: 4px;
    border: 1px solid var(--Grayscale-BE, #BEBEBE);
    background: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Photo = styled.img`
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SectionTitle = styled.div`
    color: #000;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 2rem;
    margin-bottom: 1rem;
`

export const InputText = styled.input`
    color: var(--Grayscale-BE, #BEBEBE);
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border: none;
`

export const BottomLine = styled.div`
    width: 320px;
    height: 1px;
    background: #BEBEBE;
    margin-top: 0.5rem;
`
