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
  medium_14: FONT({ weight: 500, size: 1.4 }),
  medium_15: FONT({ weight: 500, size: 1.5 }),
  medium_17: FONT({ weight: 500, size: 1.7 }),
  medium_19: FONT({ weight: 500, size: 1.9 }),
  regular_10: FONT({ weight: 400, size: 1 }),
  regular_12: FONT({ weight: 400, size: 1.2 }),
  regular_10: FONT({ weight: 400, size: 1.0 }),
};

export default font;
