import React, { useState, useEffect } from 'react';
import * as S from './Topbar.style';
import IMAGES from '../../../assets';
import BackButton from '../backButton/BackButton';
import { getProductList } from '../../../apis/getProductList';

export default function SearchTopbar({ onSearch }) {
  const [searchText, setSearchText] = useState('');
  const [products, setProducts] = useState([]);

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = async () => {
    if (searchText.trim() !== '') {
      try {
        const cursorId = null;
        const paging = 18;
        const productListResponse = await getProductList({ cursorId, paging });
        const productList = productListResponse.result.categoryData;
        setProducts(productList);
        console.log('search', products);

        const filteredProducts = productList.filter((product) => {
          const { title, authorNickname, image } = product;
          const searchTerm = searchText.trim().toLowerCase();
          return (
            title.toLowerCase().includes(searchTerm) ||
            authorNickname.toLowerCase().includes(searchTerm) ||
            image.toLowerCase().includes(searchTerm)
          );
        });
        onSearch(filteredProducts);
        console.log('filtered', filteredProducts);
        console.log('products', products);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <S.Wrapper>
      <BackButton />
      <S.SearchInput
        placeholder="검색어를 입력해주세요."
        value={searchText}
        onChange={handleInputChange}
      />
      <S.Right>
        <S.Icon src={IMAGES.search} onClick={handleSearch} />
      </S.Right>
    </S.Wrapper>
  );
}
