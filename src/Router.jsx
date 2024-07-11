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
import ChattingList from './pages/chatting/ChattingList';
import Chatting from './pages/chatting/Chatting';
import MyHistory from './pages/myPage/MyHistory';
import Success from './components/payments/Success';

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
        <Route path="/product/:productId" element={<ArtworkDetailPage />} />
        <Route path="/my-artwork-detail" element={<MyArtworkDetailPage />} />
        <Route path="/artist/:authorId" element={<ArtistPage />} />
        <Route path="/my-review" element={<MyReview />} />
        <Route path="/my-page" element={<MyPage />} />
        <Route path="/purchased" element={<Purchased />} />
        <Route path="/my-history" element={<MyHistory />} />
        <Route path="/write-review/:productId" element={<WriteReviewPage />} />
        <Route path="/chatting-list" element={<ChattingList />} />
        <Route path="/chatting-list/chatting" element={<Chatting />} />

        <Route path="/success" element={<Success />} />

        <Route path="/imageList" element={<ImageList />} />
      </Routes>
    </BrowserRouter>
  );
}
