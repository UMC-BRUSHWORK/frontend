import styled from 'styled-components';
import color from '../../../styles/color';
import font from '../../../styles/font';

export const Wrapper = styled.div`
  display: inline-block;
  padding: 1rem 1.1rem;

  border-radius: 14px;
  background: ${() => color.primary_light};

  ${() => font.medium_15}
`;
