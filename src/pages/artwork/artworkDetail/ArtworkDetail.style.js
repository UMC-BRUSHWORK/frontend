import styled from 'styled-components';
import color from '../../../styles/color';
import font from '../../../styles/font';

export const Image = styled.img`
  width: 100%;
  height: 28rem;
  object-fit: contain;
  position: fixed;
  top: 5.2rem;
  background-color: ${() => color.grayscale_88};
`;

export const Wrapper = styled.div`
  width: 100%;
  padding: 2rem;
  margin-top: 28rem;
  background-color: white;
  border-radius: 2rem 2rem 0 0;
  position: relative;
  display: flex;
  flex-direction: column;
  position: sticky;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 1.9rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

export const Report = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  flex-shrink: 0;
  color: #888888;
`;

export const Artist = styled.div`
  color: var(--Grayscale-88, #888);
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Description = styled.div`
  text-align: justify;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

export const Category = styled.div`
  color: var(--Grayscale-88, #888);
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const SubWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 2rem;
`;

export const Price = styled.div`
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Delivery = styled.div`
  color: var(--Grayscale-88, #888);
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 0.8rem;
`;

export const Divider = styled.div`
  width: 100%;
  height: 0.1rem;
  background-color: #bebebe;
  margin-top: 1.6rem;
  margin-bottom: 2.4rem;
`;

export const Margin = styled.div`
  margin-bottom: 2.4rem;
`;

export const Text = styled.div`
  ${font.medium_14};
  margin-bottom: 1rem;
`;

export const BottomWrapper = styled.div`
  width: 100%;
  position: sticky;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #fff;
  box-shadow: 0px -1px 1.5px 0px rgba(0, 0, 0, 0.15);
`;

export const FavoriteBtn = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  flex-shrink: 0;
  color: #888888;
`;

export const AskBtn = styled.div`
  width: 17.4rem;
  height: 4.4rem;
  flex-shrink: 0;
  border-radius: 0.6rem;
  background: var(
    --Gradation_dark,
    linear-gradient(225deg, #8c4ff2 0%, #4812a3 100%)
  );
  color: var(--Grayscale-White, #fff);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const CompleteBtn = styled.div`
  width: 100%;
  height: 4.4rem;
  flex-shrink: 0;
  border-radius: 0.6rem;
  background: var(
    --Gradation_dark,
    linear-gradient(225deg, #8c4ff2 0%, #4812a3 100%)
  );
  color: var(--Grayscale-White, #fff);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
