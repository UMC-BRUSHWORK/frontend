import React, { useState } from 'react';
import * as M from './ModifyInfo.style';

export default function ModifyInfo() {
  const [id] = useState('dmstn@naver.com');
  const [name] = useState('김이름');
  const [nickname] = useState('01041039923');
  // const [pwd] = useState('');
  // const [newpwd] = useState('');
  return (
    <M.Wrapper>
      <M.InputBox value={id} />
      <M.InputBox value={name} />
      <M.InputBox value={nickname} />
      <M.InputBox placeholder="기존 비밀번호" />
      <M.InputBox placeholder="새 비밀번호" />
      <M.ButtonWrapper>
        <M.Button>취소</M.Button>
        <M.Button complete>수정 완료</M.Button>
      </M.ButtonWrapper>
    </M.Wrapper>
  );
}
