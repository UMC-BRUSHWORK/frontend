import React from 'react';
import ArtWork from '../artwork/ArtWork';

export default function FavorArtworkList({ data }) {
  //   const [favorData, setFavorData] = useState();

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
          .filter((item) => item.favorStatus === 1)
          .map((item) => (
            <div
              style={{
                marginBottom: '10px',
              }}
              key={`${item.fvId}`}
            >
              <ArtWork
                image={item.productImg}
                title={item.productName}
                authorNickname={item.productAuthor}
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
          .filter((item) => item.favorStatus === 1)
          .map((item) => (
            <div
              style={{
                marginBottom: '10px',
              }}
              key={`${item.fvId}`}
            >
              <ArtWork
                image={item.productImg}
                title={item.productName}
                authorNickname={item.productAuthor}
                favorStatus={item.favorStatus}
                direction="column"
                productId={item.productId}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
