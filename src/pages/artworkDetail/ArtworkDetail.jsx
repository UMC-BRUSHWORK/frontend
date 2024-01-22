import React from 'react';
import * as A from './ArtworkDetail.style';
import Image from '../../assets/art_works/art_work_2.png'
import Favorite from '../../assets/images/favorite.svg';
import Report from '../../assets/images/emergency.svg';

function ArtworkDetail() {
    return(
        <>
            <A.Image src={Image}/>
            <A.Wrapper>
              <A.TitleWrapper>
                <A.Title>작품 제목</A.Title>
                <A.Report src={Report}/>
              </A.TitleWrapper>
              <A.Artist>작가명</A.Artist>
              <A.Description>
              한국대 졸업작품으로 만들었습니다. ‘화합’이라는 주제로 남녀, 또는 두 개의 자아가 끌어안고 있는 모습을 한국적인 컨셉으로 표현했습니다. 스테인리스 재질이라 가볍고 잘 녹슬지 않아요. 한 달 전에 만든 작품이라 상태 좋습니다! 편하게 연락주세요:)
              </A.Description>
              <A.Category>한국화</A.Category>
              <A.SubWrapper>
                <A.Price>110,000원</A.Price>
                <A.Delivery>택배</A.Delivery>
              </A.SubWrapper>
              <A.Divider/>
                <A.BottomWrapper>
                  <A.FavoriteBtn src={Favorite}/>
                  <A.AskBtn>문의하기</A.AskBtn>
                </A.BottomWrapper>
            </A.Wrapper>
        </>
    );
}

export default ArtworkDetail;
