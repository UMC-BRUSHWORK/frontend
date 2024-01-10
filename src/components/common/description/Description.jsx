import React from "react";
import * as D from "./Description.style";

function Description() {
    return(
        <D.Wrapper>
            <D.Title>
                상세 설명
            </D.Title>
            <D.TextArea 
                placeholder="최소 10자 ~ 최대 500자"
                minLength={10}
                maxLength={500}/>
        </D.Wrapper>
    )
}

export default Description;