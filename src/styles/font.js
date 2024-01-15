function FONT({ weight, size }) {
  return `
        font-family: Pretendard, sans-serif;
        font-size: ${size}rem;
        font-weight: ${weight};
        `;
}

const font = {
  // 10px = 1rem
  medium_17: FONT({ weight: 500, size: 1.7 }), // 17px
  regular_12: FONT({ weight: 400, size: 1.2 }), // 12px
};

export default font;
