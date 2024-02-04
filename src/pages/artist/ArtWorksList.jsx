import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Dropdown from '../../components/artist/dropdown/Dropdown';
import ColumnArtworkList from '../../components/common/artworkList/ColumnArtworkList';
import { getProductList } from '../../apis/getProductList';

const Wrapper = styled.div`
  margin-bottom: 6rem;
`;

export default function ArtWorksList() {
  const [productList, setProductList] = useState([{}]);
  const getProducts = async ({ cursorId, paging }) => {
    try {
      const res = await getProductList({ cursorId, paging });
      setProductList(res.result.categoryData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const cursorId = null;
    const paging = 6;
    getProducts({ cursorId, paging });
  }, []);

  return (
    <Wrapper>
      <Dropdown />
      <ColumnArtworkList data={productList} />
    </Wrapper>
  );
}
