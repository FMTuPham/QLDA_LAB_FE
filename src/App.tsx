import React from 'react';
import './App.css';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import AdminScreen from './pages/Admin/AdminScreen';
import Navbar from './components/navbar/Navbar';
import Homepage from './components/homepage/HomePage';
import LoginScreen from './pages/auth/loginPage/LoginPage';
import { useAppSelector } from './redux/hooks';
function App() {
  const isLoggedIn = useAppSelector(state => state.userReducer.loggedIn)
  return (
    <Routes>
      <Route
        path={'/homepage'}
        element={
          <>
            <Navbar />
            <Homepage />
          </>
        }
      />
      <Route path='/login' element={<LoginScreen />} />
      {isLoggedIn ? (
        <Route
          path='*'
          element={
            <>
              <Navbar />
              <AdminScreen />
            </>
          }
        />
      ) : null}
    </Routes>
  );
}

export default App;
