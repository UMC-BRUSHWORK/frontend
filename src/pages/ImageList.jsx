import React from 'react';
import IMAGES from '../assets';

export default function ImageList() {
  return (
    <div>
      <div>
        common
        <img src={IMAGES.arrowBack} alt="arrowBack" />
        <img src={IMAGES.brushworkLogo} alt="brushworkLogo" />
        <img src={IMAGES.search} alt="search" />
        <img src={IMAGES.favoriteOff} alt="favoriteOff" />
        <img src={IMAGES.favoriteOn} alt="favoriteOn" />
        <img src={IMAGES.notif} alt="notif" />
      </div>

      <div>
        defaultImage
        <img src={IMAGES.profile} alt="profile" />
      </div>

      <div>
        dummyImage
        <img src={IMAGES.profileImage} alt="profileImage" />
      </div>

      <div>
        myPage
        <img src={IMAGES.accountBox} alt="accountBox" />
        <img src={IMAGES.contract} alt="contract" />
        <img src={IMAGES.shoppingBag} alt="shoppingBag" />
        <img src={IMAGES.logout} alt="logout" />
        <img src={IMAGES.settings} alt="settings" />
      </div>

      <div>
        artist
        <img src={IMAGES.satisfied} alt="satisfied" />
        <img src={IMAGES.dissatisfied} alt="dissatisfied" />
        <img src={IMAGES.arrowDropDown} alt="arrowDropDown" />
      </div>

      <div>
        artwork
        <img src={IMAGES.edit} alt="edit" />
        <img src={IMAGES.emergency} alt="emergency" />
        <img src={IMAGES.rightButtonGrey} alt="rightButtonGrey" />
        <img src={IMAGES.rightButtonBlack} alt="rightButtonBlack" />
        <img src={IMAGES.photo} alt="photoasd" />
      </div>
    </div>
  );
}
