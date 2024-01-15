import React, { useState } from "react";
import * as C from "./Category.style";

function Category() {

    const [chipClicked, setChipClicked] = useState({
        조소: false,
        한국화: false,
        동양화: false,
        서양화: false,
        일러스트: false,
        디자인: false,
        공예: false,
        수채화: false
    });

    const handleChipClick = (label) => {
        setChipClicked(prevState => ({
            ...prevState,
            [label]: !prevState[label],
        }));
    };

    return(
        <C.Wrapper>
            <C.Title>
                카테고리
            </C.Title>
            <C.ChipTop>
                <C.CustomChip
                    label="조소"
                    onClick={() => handleChipClick("조소")}
                    color={chipClicked["조소"] ? "primary" : "default"}
                />
                <C.CustomChip
                    label="한국화"
                    onClick={() => handleChipClick("한국화")}
                    color={chipClicked["한국화"] ? "primary" : "default"}
                />
                <C.CustomChip
                    label="동양화"
                    onClick={() => handleChipClick("동양화")}
                    color={chipClicked["동양화"] ? "primary" : "default"}
                />
                <C.CustomChip
                    label="서양화"
                    onClick={() => handleChipClick("서양화")}
                    color={chipClicked["서양화"] ? "primary" : "default"}
                />
            </C.ChipTop>
            <C.ChipBottom>
                <C.CustomChip
                    label="일러스트"
                    onClick={() => handleChipClick("일러스트")}
                    color={chipClicked["일러스트"] ? "primary" : "default"}
                />
                <C.CustomChip
                    label="디자인"
                    onClick={() => handleChipClick("디자인")}
                    color={chipClicked["디자인"] ? "primary" : "default"}
                />
                <C.CustomChip
                    label="공예"
                    onClick={() => handleChipClick("공예")}
                    color={chipClicked["공예"] ? "primary" : "default"}
                />
                <C.CustomChip
                    label="수채화"
                    onClick={() => handleChipClick("수채화")}
                    color={chipClicked["수채화"] ? "primary" : "default"}
                />
            </C.ChipBottom>
        </C.Wrapper>
    )
}

export default Category;