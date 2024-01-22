import styled from 'styled-components';

export const Top = styled.div`
    z-index: 20;
    width: 100%;
    padding: 0px 10px;
    height: 44px;
    border-bottom: 1px solid rgb(242, 243, 247);
    background-color: rgb(255, 255, 255);
    transition: background-color 0.3s ease 0s, border-color 0.3s ease 0s;
    display: grid;
    grid-template-columns: minmax(25%, 1fr) auto minmax(25%, 1fr);
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: -44px;
    position: sticky;
    top: 0px;
    left: 0px;
    right: 0px;
`

export const Image = styled.img`
    width: 100%;
    height: 27rem;
    position: sticky;
`

export const Wrapper = styled.div`
    &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2rem;
    border-radius: 2rem;
    border-style: dotted;
  }
    width: 100%;
    height: 100rem;
    padding: 2rem;
    position: relative;
    display: flex;
    flex-direction: column;
`
export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Title = styled.div`
    font-size: 1.9rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 2rem;
    margin-bottom: 1rem;
`

export const Report = styled.img`
    width: 2.4rem;
    height: 2.4rem;
    flex-shrink: 0;
    color: #888888;
`

export const Artist = styled.div`
    color: var(--Grayscale-88, #888);
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

export const Description = styled.div`
    text-align: justify;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 2rem;
    margin-bottom: 1rem;
`

export const Category = styled.div`
    color: var(--Grayscale-88, #888);
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
export const SubWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 2rem;
`

export const Price = styled.div`
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

export const Delivery = styled.div`
    color: var(--Grayscale-88, #888);
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-left: 0.8rem;
`

export const Divider = styled.div`
    width: 100%;
    height: 0.1rem;
    background-color: #BEBEBE;
    margin-top: 1.5rem;
`

export const BottomWrapper = styled.div`
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background: #FFF;
    box-shadow: 0px -1px 1.5px 0px rgba(0, 0, 0, 0.15);
`

export const FavoriteBtn = styled.img`
    width: 2.4rem;
    height: 2.4rem;
    flex-shrink: 0;
    color: #888888;
`

export const AskBtn = styled.div`
    width: 17.4rem;
    height: 4.4rem;
    flex-shrink: 0;
    border-radius: 0.6rem;
    background: var(--Gradation_dark, linear-gradient(225deg, #8C4FF2 0%, #4812A3 100%));
    color: var(--Grayscale-White, #FFF);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

export const CompleteBtn = styled.div`
    width: 100%;
    height: 4.4rem;
    flex-shrink: 0;
    border-radius: 0.6rem;
    background: var(--Gradation_dark, linear-gradient(225deg, #8C4FF2 0%, #4812A3 100%));
    color: var(--Grayscale-White, #FFF);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`