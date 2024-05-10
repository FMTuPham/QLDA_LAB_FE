import React from 'react';
import './App.css';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import AdminScreen from './pages/Admin/AdminScreen';
function App() {
  return (
    <Routes>
      <Route
        path='*'
        element={
          <>
            <AdminScreen />
          </>
        }
      />
    </Routes>
  );
}

export default App;
