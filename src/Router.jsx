import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignInPage from './pages/auth/SignIn';
import SignUpPage from './pages/auth/SignUp';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signIn" element={<SignInPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}
