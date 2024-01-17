import React from 'react';
import Dropdown from '../../components/artist/dropdown/Dropdown';
import dummy from '../../constants/artWorkDummy';
import ColumnArtworkList from '../../components/common/artworkList/ColumnArtworkList';

export default function ArtWorksList() {
  return (
    <div>
      <Dropdown />
      <ColumnArtworkList data={dummy} direction="column" />
    </div>
  );
}
