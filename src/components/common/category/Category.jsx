import React, { useState } from "react";
import * as C from "./Category.style";

const CATEGORY = [
  { id: 1, label: "조소" },
  { id: 2, label: "한국화" },
  { id: 3, label: "동양화" },
  { id: 4, label: "서양화" },
  { id: 5, label: "일러스트" },
  { id: 6, label: "디자인" },
  { id: 7, label: "공예" },
  { id: 8, label: "수채화" },
];

function Category({ chips=CATEGORY, title="카테고리" }) {

    const [chipClicked, setChipClicked] = useState(() => {
        const initialState = Object.fromEntries(
          Object.keys(chips).map((label) => [label, false])
        );
        return initialState;
    });

    const handleChipClick = (label) => {
        setChipClicked(prevState => ({
            ...prevState,
            [label]: !prevState[label],
        }));
    };

    return(
        <C.Wrapper>
            <C.Title>{title}</C.Title>
            {chips.map((chip) => (
        <React.Fragment key={chip.id}>
        {chip.id < 4 ? (
          <C.ChipTop>
            <C.CustomChip
              label={chip.label}
              onClick={() => handleChipClick(chip.label)}
              color={chipClicked[chip.label] ? "primary" : "default"}
            />
          </C.ChipTop>
        ) : (
          <C.ChipBottom>
            <C.CustomChip
              label={chip.label}
              onClick={() => handleChipClick(chip.label)}
              color={chipClicked[chip.label] ? "primary" : "default"}
            />
          </C.ChipBottom>
        )}
      </React.Fragment>
      ))}
        </C.Wrapper>
    )
}

export default Category;