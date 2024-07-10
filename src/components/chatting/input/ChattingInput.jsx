import React, { useRef, useState } from 'react';
import { IoIosAdd, IoMdSend } from 'react-icons/io';

import * as I from './ChattingInput.style';
import ChattingMenu from '../../modal/chatting/ChattingMenu';
import PurchasedOrder from '../../modal/chatting/PurchasedOrder';

export default function ChattingInput({ setMessage, sendMessage, message }) {
  const modalRef = useRef(null);

  const [allSizeModalShow, setAllSizeModalShow] = useState(false);
  const [billModalShow, setBillModalShow] = useState(false);

  const modalOutSideClick = (e) => {
    if (modalRef.current === e.target) {
      setAllSizeModalShow(false);
      setBillModalShow(false);
    }
  };

  return (
    <>
      <I.FormWrapper>
        <I.InputWrapper>
          <IoIosAdd size={24} onClick={() => setAllSizeModalShow(true)} />
          <I.InputBox
            className="input"
            type="text"
            placeholder="메세지를 입력하세요."
            value={message}
            onChange={({ target: { value } }) => setMessage(value)}
            onKeyPress={(event) =>
              event.key === 'Enter'
                ? (sendMessage(event), setMessage(''))
                : null
            }
          />
        </I.InputWrapper>
        <IoMdSend
          size={24}
          color="#4812a3"
          onClick={(e) => {
            sendMessage(e);
            setMessage('');
          }}
        />
      </I.FormWrapper>
      {allSizeModalShow && (
        <ChattingMenu
          modalRef={modalRef}
          modalOutSideClick={modalOutSideClick}
          setAllSizeModalShow={setAllSizeModalShow}
          setBillModalShow={setBillModalShow}
        />
      )}
      {billModalShow && (
        <PurchasedOrder
          modalRef={modalRef}
          modalOutSideClick={modalOutSideClick}
        />
      )}
    </>
  );
}
