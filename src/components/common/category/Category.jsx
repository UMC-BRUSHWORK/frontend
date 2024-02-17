import React from 'react';
import * as C from './Category.style';

function Category({ chipName = '카테고리', onClick, isSelected }) {
  return (
    <C.Chip onClick={onClick} clicked={isSelected}>
      {chipName}
    </C.Chip>
  );
}

export default Category;
