// PurchasedBar.js
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as P from './PurchasedBar.style';

function getActiveTab(pathname) {
  return pathname.includes('/myReview') ? 'myReview' : 'purchased';
}

function PurchasedBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(getActiveTab(location.pathname));

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    navigate(`/${tab}`);
  };

  return (
    <P.TabContainer>
      <P.TabButton
        active={activeTab === 'purchased'}
        onClick={() => handleTabChange('purchased')}
      >
        구매 내역
        <P.TabIndicator active={activeTab === 'purchased'} />
      </P.TabButton>

      <P.TabButton
        active={activeTab === 'myReview'}
        onClick={() => handleTabChange('myReview')}
      >
        내가 쓴 후기
        <P.TabIndicator active={activeTab === 'myReview'} />
      </P.TabButton>
      <P.TabSeparator />
    </P.TabContainer>
  );
}

export default PurchasedBar;
