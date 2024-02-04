import React from 'react';
import styled from 'styled-components';
import ArtWork from '../artwork/ArtWork';

export default function RowArtWorkList({ data, size }) {
  return (
    <Wrapper>
      {data.map((item) => (
        <ArtWork
          image={item.image}
          title={item.title}
          authorNickname={item.authorNickname}
          direction="row"
          size={size}
          productId={item.productId}
        />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  overflow-x: auto;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }
`;
