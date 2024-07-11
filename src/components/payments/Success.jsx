import queryString from 'query-string';
import React, { useState } from 'react';
import './success.css';

export default function Success() {
  const { roomID, orderId, paymentKey, amount } = queryString.parse(
    window.location.search,
  );
  const [isConfirmed, setIsConfirmed] = useState(false);

  const baseURL = process.env.REACT_APP_BASE_URL;
  async function confirmPayment() {
    const secretKey = 'test_sk_Z1aOwX7K8mX67x5jD7lQryQxzvNP';
    const encryptedSecretKey = `Basic ${btoa(`${secretKey}:`)}`;

    const response = await fetch(`${baseURL}/payment/confirm`, {
      method: 'POST',
      headers: {
        Authorization: encryptedSecretKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        paymentKey,
        orderId,
        amount,
      }),
    });
    const json = await response.json();
    console.log(json);
    console.log(roomID);

    if (response.ok) {
      setIsConfirmed(true);
    }
    return json;
  }

  return (
    <div>
      {isConfirmed ? (
        <div
          className="flex-column align-center confirm-success w-100 max-w-540"
          style={{
            display: 'flex',
          }}
        >
          <img
            src="https://static.toss.im/illusts/check-blue-spot-ending-frame.png"
            alt="spinner"
            width="120"
            height="120"
          />
          <h2 className="title">결제를 완료했어요</h2>
          <div className="response-section w-100">
            <div className="flex justify-between">
              <span className="response-label">결제 금액</span>
              <span id="amount" className="response-text">
                {amount}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="response-label">paymentKey</span>
              <span id="paymentKey" className="response-text">
                {paymentKey}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="response-label">주문번호</span>
              <span id="orderId" className="response-text">
                {orderId}
              </span>
            </div>
          </div>

          <div className="w-100 button-group">
            <div className="flex" style={{ gap: '16px' }}>
              <a
                className="btn w-100"
                href={`/chatting-list/chatting?roomID=${roomID}`}
              >
                채팅으로 돌아가기
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-column align-center confirm-loading w-100 max-w-540">
          <div className="flex-column align-center">
            <img
              src="https://static.toss.im/lotties/loading-spot-apng.png"
              alt=""
              width="120"
              height="120"
            />
            <h2 className="title text-center">결제 요청까지 성공했어요.</h2>
            <h4 className="text-center description">
              결제 승인하고 완료해보세요.
            </h4>
          </div>
          <div className="w-100">
            <button
              type="button"
              className="btn primary w-100"
              onClick={confirmPayment}
            >
              결제 승인하기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
