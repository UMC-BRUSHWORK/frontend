import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/main/Main';
import SearchPage from './pages/main/Seach';
import FavoritesPage from './pages/Favorites';
import SignInPage from './pages/auth/SignIn';
import SignUpPage from './pages/auth/SignUp';
import ArtworkUploadPage from './pages/ArtworkUpload';
import ArtworkDetailPage from './pages/artworkDetail/ArtworkDetail';
import MyArtworkDetailPage from './pages/artworkDetail/MyArtworkDetail';
import ArtistPage from './pages/artist/Artist';
// import Review from './pages/Review';
import MyReview from './pages/myPage/MyReview';
import MyPage from './pages/myPage/MyPage';
import Purchased from './pages/myPage/Purchased';

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
        <Route path="/myArtworkDetail" element={<MyArtworkDetailPage />} />
        <Route path="/artist" element={<ArtistPage />} />
        <Route path="/myReview" element={<MyReview />} />
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/purchased" element={<Purchased />} />
      </Routes>
    </BrowserRouter>
  );
}
