import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/main/Main';
import SearchPage from './pages/Seach';
import FavoritesPage from './pages/Favorites';
import SignInPage from './pages/auth/SignIn';
import SignUpPage from './pages/auth/SignUp';
import ArtworkUploadPage from './pages/ArtworkUpload';
import ArtworkDetailPage from './pages/ArtworkDetail';
import ArtistPage from './pages/artist/Artist';
import MyReview from './pages/MyReview';
import MyPage from './pages/MyPage';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signIn" element={<SignInPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/artworkUpload" element={<ArtworkUploadPage />} />
        <Route path="/artworkDetail" element={<ArtworkDetailPage />} />
        <Route path="/artist" element={<ArtistPage />} />
        <Route path="/myReview" element={<MyReview />} />
        <Route path="/myPage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}
