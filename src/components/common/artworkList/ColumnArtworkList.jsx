import React from 'react';
import ArtWork from '../artwork/ArtWork';

export default function ColumnArtworkList({ data }) {
  console.log(data);
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
              key={`${item.productId}`}
            >
              <ArtWork
                image={item.image}
                title={item.title}
                authorNickname={item.authorNickname}
                favorStatus={item.favorStatus}
                direction="column"
                productId={item.productId}
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
              key={`${item.productId}`}
            >
              <ArtWork
                image={item.image}
                title={item.title}
                authorNickname={item.authorNickname}
                direction="column"
                productId={item.productId}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
