import React from 'react';
import RowArtWorkList from '../../components/common/artworkList/RowArtWorkList';
import dummy from '../../constants/reviewsDummy';

export default function ArtistReviewList() {
  return <RowArtWorkList data={dummy} />;
}
