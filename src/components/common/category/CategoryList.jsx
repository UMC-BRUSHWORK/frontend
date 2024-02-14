import React, { useState } from 'react';
import Category from './Category';
import * as C from './Category.style';

function CategoryList({ data, title, onHashtagClick }) {
  const [selectedHashtag, setSelectedHashtag] = useState('');

  const handleHashtagClick = (hashtag) => {
    setSelectedHashtag(hashtag);
    if (onHashtagClick) {
      onHashtagClick(hashtag);
    }
  };

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
                onClick={() => handleHashtagClick(item.label)}
                isSelected={selectedHashtag === item.label}
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
                onClick={() => handleHashtagClick(item.label)}
                isSelected={selectedHashtag === item.label}
              />
            ))}
      </C.ChipBottom>
    </>
  );
}

export default CategoryList;
