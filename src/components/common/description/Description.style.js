import styled from "styled-components";

export const Title = styled.div`
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: ${props => props.active ? '#4812A3' : '#000000'}
`

export const TextArea = styled.textarea`
    border: 1px solid var(--Grayscale-BE, #BEBEBE);
    border-radius: 0.6rem;
    width: 100%;
    height: 13rem;
    color: var(--Grayscale-33, #333);
    text-align: justify;
    font-size: 1.7rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding: 1rem;
    &::placeholder{
		color: #BEBEBE;
	}
    outline-color: var(--Primary_normal, #8C4FF2);
    outline-width: 0.1rem;
`