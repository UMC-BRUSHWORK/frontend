import styled from 'styled-components';

export const Wrapper = styled.div`
    margin: 2rem;
`

export const Image = styled.div`
    width: 12rem;
    height: 12rem;
    flex-shrink: 0;
    border-radius: 0.4rem;
    border: 0.1rem solid var(--Grayscale-BE, #BEBEBE);
    background: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Photo = styled.img`
    width: 2.4rem;
    height: 2.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SectionTitle = styled.div`
    color: #000;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 2rem 0 1rem 0;
`

export const InputText = styled.input`
    color: var(--Grayscale-33, #333);
    font-size: 1.7rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: left;
    border: none;

    &::placeholder {
        color: var(--Grayscale-BE, #BEBEBE);
        font-size: 1.7rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 0em;
    }

    &:focus {
    outline: none;
  }
`

export const BottomLine = styled.div`
    width: 100%;
    height: 0.1rem;
    margin: 0.5rem 0 2rem 0;
    background: ${props => props.active ? '#333333' : '#BEBEBE'}
`