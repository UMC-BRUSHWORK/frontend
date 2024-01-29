import React, { useState } from 'react';
import * as C from './Category.style';

function CategoryTest({
    chipName = '카테고리'
}) {
    const [isClicked, setClicked] = useState(false);
  
    const handleClick = () => {
      setClicked(!isClicked);
    };
  
    return (
        <C.Chip clicked={isClicked} onClick={handleClick}>
          {chipName}
        </C.Chip>
    );
  };
  
  export default CategoryTest;
