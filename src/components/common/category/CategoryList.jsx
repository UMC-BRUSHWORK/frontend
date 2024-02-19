import React from 'react';
import Category from './Category';
import * as C from './Category.style';

function CategoryList({ data, title, selectedItems, onClick }) {
  return (
    <>
      <C.Title>{title}</C.Title>
      <C.ChipTop>
        {data &&
          data
            .filter((item) => item.id <= 4)
            .map((item) => (
              <Category
                key={item.id}
                chipName={item.label}
                onClick={() => onClick(item.id)}
                isSelected={selectedItems.includes(item.id)}
              />
            ))}
      </C.ChipTop>
      <C.ChipBottom>
        {data &&
          data
            .filter((item) => item.id > 4)
            .map((item) => (
              <Category
                key={item.id}
                chipName={item.label}
                onClick={() => onClick(item.id)}
                isSelected={selectedItems.includes(item.id)}
              />
            ))}
      </C.ChipBottom>
    </>
  );
}

export default CategoryList;
