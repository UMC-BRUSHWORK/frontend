import React from 'react';
import * as R from './ReportModal.style';
import Reason from './Reason';

function ReportModal() {
    return(
        <R.Wrapper>
            <R.Title>이 게시물을 신고하는 이유</R.Title>
            <Reason />
            <R.BtnWrapper>
                <R.CancelBtn>취소</R.CancelBtn>
                <R.CompleteBtn>신고하기</R.CompleteBtn>
            </R.BtnWrapper>
        </R.Wrapper>
    );
}

export default ReportModal;