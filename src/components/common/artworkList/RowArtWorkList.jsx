import React from 'react';
import styled from 'styled-components';
import ArtWork from '../artwork/ArtWork';

export default function RowArtWorkList({ data, size }) {
  console.log('RowArtWorkList');
  console.log(size);

  return (
    <Wrapper>
      {data.map((item) => (
        <ArtWork
          artSrc={item.artSrc}
          artName={item.artName}
          artist={item.artist}
          direction="row"
          size={size}
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
