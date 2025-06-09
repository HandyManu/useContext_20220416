import './App.css';
import React, { useState } from "react";
import { AuthProvider } from './context/authConntext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Information from './pages/information';
import About from './pages/about'; // Nueva página no protegida
import PrivateRoute from './components/privateRoute';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* Ruta no protegida */}
            <Route path='/' element={<Login />} />
            <Route path='/about' element={<About />} />

            {/* Rutas protegidas */}
            <Route element={<PrivateRoute />}>
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/information' element={<Information />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
