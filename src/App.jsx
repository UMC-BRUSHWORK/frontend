import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';

function App() {
  return (
    <Routes>
      <Route path="/auth/signIn" element={<SignIn />} />
      <Route path="/auth/signUp" element={<SignUp />} />
    </Routes>
  );
}

export default App;
