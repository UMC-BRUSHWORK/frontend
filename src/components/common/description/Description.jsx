import React, {useState} from "react";
import * as D from "./Description.style";

function Description() {

    const [title, setTitle] = useState('');

    return(
        <>
            <D.Title active={title !== ''}>
                상세 설명
            </D.Title>
            <D.TextArea 
                placeholder="최소 10자 ~ 최대 500자"
                minLength={10}
                maxLength={500}
                value={title}
                onChange={(e) => setTitle(e.target.value)}/>
        </>
    )
}

export default Description;