import React from 'react';
import Dropdown from '../../components/artist/dropdown/Dropdown';
import ArtworkList from '../../components/common/artworkList/ArtworkList';
import dummy from '../../constants/dummy';

export default function ArtWorksList() {
  return (
    <div>
      <Dropdown />
      <ArtworkList data={dummy} />
    </div>
  );
}
