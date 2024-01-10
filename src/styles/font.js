function FONT({ weight, size }) {
  return `
        font-family: Pretendard, sans-serif;
        font-size: ${size}rem;
        font-weight: ${weight};
        `;
}

const font = {
  // 10px = 1rem
  medium_13: FONT({ weight: 500, size: 1.3 }),
  medium_15: FONT({ weight: 500, size: 1.5 }),
  medium_17: FONT({ weight: 500, size: 1.7 }), // 17px
  medium_19: FONT({ weight: 500, size: 1.9 }),
};

export default font;
