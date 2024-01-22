import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 5.2rem;
    padding-left: 2rem;
    padding-right: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Left = styled.div`
    display: flex;
`;

export const Right = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const Icon = styled.img`
    width: 2.4rem;
    height: 2.4rem;
    flex-shrink: 0;
`;