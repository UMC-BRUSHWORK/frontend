import { BrouserRouter, Route, Routes } from 'react-router-dom';
import Mainpage from './pages/Main';
import SearchPage from './pages/Seach';
import FavoritesPage from './pages/Favorites';
import SignInPage from './pages/Auth/SignIn';
import SignUpPage from './pages/Auth/SignUp';
import ArtworkUploadPage from './pages/ArtworkUpload';
import ArtworkDetailPage from './pages/ArtworkDetail';
import ArtistPage from './pages/Artist';
import MyPage from './pages/Mypage';
import Review from './pages/Review';
import MyReview from './pages/MyReview';

export default function Router() {
  return (
    <>
      <BrouserRouter>
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
          <Route path="/review" element={<Review />} />
          <Route path="/myReview" element={<MyReview />} />
        </Routes>
      </BrouserRouter>
    </>
  );
}
