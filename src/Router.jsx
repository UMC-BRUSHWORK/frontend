import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/main/Main';
import SearchPage from './pages/main/Seach';
import FavoritesPage from './pages/favorites/Favorites';
import SignInPage from './pages/auth/SignIn';
import SignUpPage from './pages/auth/SignUp';
import ArtworkUploadPage from './pages/artwork/artworkUpload/ArtworkUpload';
import ArtworkDetailPage from './pages/artwork/artworkDetail/ArtworkDetail';
import MyArtworkDetailPage from './pages/artwork/artworkDetail/MyArtworkDetail';
import ArtistPage from './pages/artist/Artist';
import MyReview from './pages/myPage/MyReview';
import MyPage from './pages/myPage/MyPage';
import Purchased from './pages/myPage/Purchased';
import WriteReviewPage from './pages/myPage/WriteReviewPage';
import ImageList from './pages/ImageList';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/artwork-upload" element={<ArtworkUploadPage />} />
        <Route path="/artwork-detail" element={<ArtworkDetailPage />} />
        <Route path="/myArtwork-detail" element={<MyArtworkDetailPage />} />
        <Route path="/artist" element={<ArtistPage />} />
        <Route path="/my-review" element={<MyReview />} />
        <Route path="/my-page" element={<MyPage />} />
        <Route path="/purchased" element={<Purchased />} />
        <Route path="/writeReview" element={<WriteReviewPage />} />
        <Route path="/imageList" element={<ImageList />} />
      </Routes>
    </BrowserRouter>
  );
}
