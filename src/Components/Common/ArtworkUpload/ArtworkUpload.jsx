import React from 'react';
import * as U from './ArtworkUpload.style';
import photo from '../../../assets/images/photo.svg';
import Category from '../category/Category';
import Description from '../description/Description';
import WriteCompleteButton from '../button/WriteCompleteButton';

function ArtworkUpload() {
    return(
        <>
            <U.Image>
                <U.Photo src={photo}/>
            </U.Image>
            <U.SectionTitle>작품 제목</U.SectionTitle>
            <U.InputText
                placeholder='최소 3자 ~ 최대 30자'
            />
            <U.BottomLine/>
            <Category/>
            <U.SectionTitle>작품 가격</U.SectionTitle>
            <U.InputText
                placeholder='￦'
            />
            <U.BottomLine/>
            <Description/>
            <WriteCompleteButton/>
        </>
    );
}

export default ArtworkUpload;