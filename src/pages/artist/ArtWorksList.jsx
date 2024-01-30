import React from 'react';
import styled from 'styled-components';
import Dropdown from '../../components/artist/dropdown/Dropdown';
import dummy from '../../constants/artWorkDummy';
import ColumnArtworkList from '../../components/common/artworkList/ColumnArtworkList';

const Wrapper = styled.div`
  margin-bottom: 6rem;
`;

export default function ArtWorksList() {
  return (
    <Wrapper>
      <Dropdown />
      <ColumnArtworkList data={dummy} />
    </Wrapper>
  );
}
