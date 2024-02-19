import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import * as S from './Search.style';
import RowArtWorkList from '../../components/common/artworkList/RowArtWorkList';
import SearchTopbar from '../../components/common/topbar/SearchTopbar';
import { getProductList } from '../../apis/getProductList';
import categoryDummy from '../../constants/categoryDummy';
import CategoryList from '../../components/common/category/CategoryList';
import ColumnArtworkList from '../../components/common/artworkList/ColumnArtworkList';

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0rem 2rem;

  display: flex;
  flex-direction: column;
  margin-bottom: 6rem;
`;

export default function Seach() {
  const [productList, setProductList] = useState([]);
  const [category, setCategory] = useState([]);
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleCategoryClick = (selectedCategory) => {
    if (category.includes(selectedCategory)) {
      setCategory((prev) => prev.filter((value) => value !== selectedCategory));
      return;
    }
    setCategory((prev) => [...prev, selectedCategory]);
  };

  const getProducts = async ({ cursorId, paging }) => {
    try {
      const res = await getProductList({ cursorId, paging });
      setProductList(res.result.categoryData);
      console.log(res.result.categoryData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = async (searchResult) => {
    setSearchedProducts(searchResult);
    setSearched(true);
  };

  useEffect(() => {
    const cursorId = null;
    const paging = 6;
    getProducts({ cursorId, paging });
  }, []);

  return (
    <>
      <SearchTopbar onSearch={handleSearch} />
      <Wrapper>
        <S.Line />
        {searched ? (
          <S.ListWrapper>
            <S.Text>검색 결과</S.Text>
            <ColumnArtworkList data={searchedProducts} />
          </S.ListWrapper>
        ) : null}
        <S.Text>마음에 드는 작품을 찾아보세요!</S.Text>
        <CategoryList
          data={categoryDummy}
          selectedItems={category}
          onClick={handleCategoryClick}
        />
        <S.Line style={{ marginTop: '2rem' }} />
        <S.ListWrapper>
          <S.Text>추천 작품</S.Text>
          <RowArtWorkList data={productList} size="9rem" />
        </S.ListWrapper>
        <S.ListWrapper>
          <S.Text>요즘 인기 작품</S.Text>
          <RowArtWorkList data={productList} size="9rem" />
        </S.ListWrapper>
        <S.ListWrapper>
          <S.Text>따끈따끈 신인 작품</S.Text>
          <RowArtWorkList data={productList} size="9rem" />
        </S.ListWrapper>
      </Wrapper>
    </>
  );
}
