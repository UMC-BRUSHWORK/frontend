import queryString from 'query-string';
import React from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Fail() {
  const [searchParams] = useSearchParams();
  const errorCode = searchParams.get('code');
  const errorMessage = searchParams.get('message');

  const { roomID } = queryString.parse(window.location.search);

  return (
    <div className="wrapper w-100">
      <div className="flex-column align-center w-100 max-w-540">
        <img
          src="https://static.toss.im/lotties/error-spot-apng.png"
          width="120"
          height="120"
          alt=""
        />
        <h2 className="title">결제를 실패했어요</h2>
        <div className="response-section w-100">
          <div className="flex justify-between">
            <span className="response-label">code</span>
            <span id="error-code" className="response-text">
              {errorCode}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="response-label">message</span>
            <span id="error-message" className="response-text">
              {errorMessage}
            </span>
          </div>
        </div>

        <div className="w-100 button-group">
          <a
            className="btn"
            href={`/chatting-list/chatting?roomID=${roomID}`}
            rel="noreferrer noopener"
          >
            채팅으로 돌아가기
          </a>
        </div>
      </div>
    </div>
  );
}
