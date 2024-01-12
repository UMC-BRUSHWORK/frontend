import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mainpage from './pages/Main';
import SearchPage from './pages/Seach';
import FavoritesPage from './pages/Favorites';
import SignInPage from './pages/auth/SignIn';
import SignUpPage from './pages/auth/SignUp';
import ArtworkUploadPage from './pages/ArtworkUpload';
import ArtworkDetailPage from './pages/ArtworkDetail';
import ArtistPage from './pages/Artist';
import MyPage from './pages/Mypage';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/signIn" element={<SignInPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/artworkUpload" element={<ArtworkUploadPage />} />
        <Route path="/artworkDetail" element={<ArtworkDetailPage />} />
        <Route path="/artist" element={<ArtistPage />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}
