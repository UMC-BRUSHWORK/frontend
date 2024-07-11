import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './WriteCompleteButton.style';
import { postReviewData } from '../../../apis/postReviewData';

function WriteCompleteButton({ data, type }) {
  const navigate = useNavigate();
  const postReview = async () => {
    try {
      const { result } = await postReviewData(data);
      console.log(result);
      navigate('/my-history');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {type === 'WriteOnButton' && <S.WriteOnButton>작성 완료</S.WriteOnButton>}
      {type === 'WriteOffButton' && (
        <S.WriteOffButton>작성 완료</S.WriteOffButton>
      )}
      {type === 'WriteOnMypageButton' && (
        <S.WriteOnMypageButton onClick={postReview}>
          작성 완료
        </S.WriteOnMypageButton>
      )}
    </>
  );
}

export default WriteCompleteButton;
