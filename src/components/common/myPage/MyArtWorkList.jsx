import React from 'react';
import styled from 'styled-components';
import ArtWork from '../artwork/ArtWork';

export default function MyArtWorkList({ data }) {
  return (
    <Wrapper>
      {data.map((item) => (
        <ArtWork
          key={item.productId}
          image={item.image}
          title={item.title}
          authorNickname={item.authorNickname}
          direction="row"
          size="9rem"
          hideFavorite="true"
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
