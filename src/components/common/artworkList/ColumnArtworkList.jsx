import React from 'react';
import StackGrid from 'react-stack-grid';
import ArtWork from '../artwork/ArtWork';

export default function ColumnArtworkList({ data, direction }) {
  return (
    <StackGrid
      columnWidth="50%"
      duration={500}
      monitorImagesLoaded
      appearDelay={1000}
      gutterWidth={10}
      gutterHeight={10}
    >
      {data.map((item) => (
        <div key={`${item.id}-${direction}`}>
          <ArtWork
            artSrc={item.artSrc}
            artName={item.artname}
            artist={item.artist}
            direction="column"
          />
        </div>
      ))}
    </StackGrid>
  );
}
