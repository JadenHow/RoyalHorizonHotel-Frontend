import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from 'contexts/AuthContext';
import { WindowSizeProvider } from 'contexts/WindowSizeContext';
import NavBar from 'components/layout/NavBar';
import Footer from 'components/layout/Footer';
const Home = React.lazy(() => import('pages/Home'));

const App = () => {
  return (
    <AuthProvider>
      <WindowSizeProvider>
        <BrowserRouter>
          <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
            <NavBar />
            <div style={{ flex: 1 }}>
              <React.Suspense fallback={<>...</>}>
                <Routes>
                  <Route index element={<Home />} />
                  <Route path="/*" element={<Home /> } />
                  <Route path="*" element={<div>404</div>} />
                </Routes>
              </React.Suspense>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </WindowSizeProvider>
    </AuthProvider>
  );
};

export default App;
