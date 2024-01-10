import React from 'react';
import StackGrid from 'react-stack-grid';
import ArtWork from '../Components/Common/ArtWork/ArtWork';
import dummy from '../constants/dummy';

function App() {
  return (
    <StackGrid
      columnWidth={(window.innerWidth - 20) / 2}
      duration={500}
      monitorImagesLoaded
      appearDelay={1000}
    >
      {dummy.map((item) => (
        <div key={item.id}>
          <ArtWork artName={item.artname} artist={item.artist} />
        </div>
      ))}
    </StackGrid>
  );
}

export default App;
