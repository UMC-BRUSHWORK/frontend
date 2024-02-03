import React from 'react';
import ArtWork from '../artwork/ArtWork';

export default function ColumnArtworkList({ data }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        columnGap: '10px',
        gridAutoColumns: 'auto-fill',
      }}
    >
      <div>
        {data
          .filter((item) => item.productId % 2 === 1)
          .map((item) => (
            <div
              style={{
                marginBottom: '10px',
              }}
              key={`${item.id}`}
            >
              <ArtWork
                artSrc={item.artSrc}
                artName={item.artname}
                artist={item.artist}
                direction="column"
              />
            </div>
          ))}
      </div>
      <div>
        {data
          .filter((item) => item.productId % 2 === 0)
          .map((item) => (
            <div
              style={{
                marginBottom: '10px',
              }}
              key={`${item.id}`}
            >
              <ArtWork
                artSrc={item.artSrc}
                artName={item.artname}
                artist={item.artist}
                direction="column"
              />
            </div>
          ))}
      </div>
    </div>
  );
}
