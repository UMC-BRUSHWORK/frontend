import React from 'react';
import { IoIosAdd, IoMdSend } from 'react-icons/io';

import * as I from './ChattingInput.style';

export default function ChattingInput({ setMessage, sendMessage, message }) {
  return (
    <I.FormWrapper>
      <I.InputWrapper>
        <IoIosAdd size={24} />
        <I.InputBox
          className="input"
          type="text"
          placeholder="메세지를 입력하세요."
          value={message}
          onChange={({ target: { value } }) => setMessage(value)}
          onKeyPress={(event) =>
            event.key === 'Enter' ? (sendMessage(event), setMessage('')) : null
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
  );
}
