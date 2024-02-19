import React, { useState } from 'react';
import * as R from './ReportModal.style';
import Reason from './Reason';
import IMAGES from '../../../assets';
import { postReport } from '../../../apis/postReport';
import Toast from '../../common/toast/Toast';
import { useToast } from '../../../hooks/useToast';

function ReportModal({ author }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedReason, setSelectedReason] = useState();
  const { toastVisible, showToast } = useToast();

  const modalOpen = () => {
    setShowModal(!showModal);
  };

  const handleSelectReason = (reason) => {
    setSelectedReason(reason);
  };

  const handleReport = async () => {
    const userId = parseInt(localStorage.getItem('userId'), 10);
    try {
      const response = await postReport({
        status: 0,
        reporterId: userId,
        reporteeId: author,
        context: selectedReason,
      });
      console.log('신고', response);
      setShowModal(false);
      showToast();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <R.Report src={IMAGES.emergency} onClick={modalOpen} />
      {toastVisible && (
        <Toast
          message="신고가 접수되었어요."
          toastVisible={toastVisible}
          style={{ marginBottom: '100rem' }}
        />
      )}
      {showModal && (
        <R.ModalWrapper>
          <R.ModalBackdrop />
          <R.Wrapper>
            <R.Title>이 게시물을 신고하는 이유</R.Title>
            <Reason onSelectReason={handleSelectReason} />
            <R.BtnWrapper>
              <R.CancelBtn onClick={modalOpen}>취소</R.CancelBtn>
              <R.CompleteBtn onClick={handleReport}>신고하기</R.CompleteBtn>
            </R.BtnWrapper>
          </R.Wrapper>
        </R.ModalWrapper>
      )}
    </>
  );
}

export default ReportModal;
