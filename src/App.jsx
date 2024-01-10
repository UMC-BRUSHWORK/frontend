import React from 'react';
import StackGrid from 'react-stack-grid';
import ArtWork from './Components/Common/ArtWork/ArtWork';
import dummy from './constants/dummy';

function App() {
  console.log(window.innerWidth);
  return (
    <>
      <p>asdf</p>
      <StackGrid
        columnWidth={200}
        // columnWidth={(window.innerWidth - 20) / 2}
        gutterWidth={14}
        gutterHeight={12}
      >
        {dummy.map((item) => (
          <div key={item.id}>
            <ArtWork artName={item.artname} artist={item.artist} />
          </div>
        ))}
      </StackGrid>
    </>
  );
}

export default App;
