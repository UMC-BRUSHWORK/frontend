import styled from "styled-components";

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
export const TextArea = styled.textarea`
    border: 1px solid #BEBEBE;
    border-radius: 3px;
    width: 100%;
    height: 13rem;
    font-size: 17px;
    font-weight: 600;
    padding: 1rem;
    &::placeholder{
		color: #BEBEBE;
	}
    outline-color: #8C4FF2;
    outline-width: 1px;
`