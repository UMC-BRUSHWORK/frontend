import React from 'react';
import Category from './Category';
import * as C from './Category.style';

function CategoryList({data, title}){
    return(
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
              />
            ))}
        </C.ChipBottom>
        </>
    );
}

export default CategoryList;