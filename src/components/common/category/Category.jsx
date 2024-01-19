import React, { useState } from "react";
import * as C from "./Category.style";

function Category({ chips, title }) {

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