import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Dropdown from '../../components/artist/dropdown/Dropdown';
import ColumnArtworkList from '../../components/common/artworkList/ColumnArtworkList';
import { getProductList } from '../../apis/getProductList';

const Wrapper = styled.div`
  margin-bottom: 6rem;
`;

export default function ArtWorksList({authorId}) {
  const [productList, setProductList] = useState([{}]);
  const getProducts = async({ cursorId, paging, author }) => {
    try {
      const res = await getProductList({ cursorId, paging, author });
      setProductList(res.result.categoryData);
      console.log(res.result.categoryData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const cursorId = null;
    const paging = 1000;
    const author = authorId;
    getProducts({ cursorId, paging, author });
  }, []);

  return (
    <Wrapper>
      <Dropdown />
      <ColumnArtworkList data={productList} />
    </Wrapper>
  );
}