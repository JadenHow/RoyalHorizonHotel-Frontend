import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from 'contexts/AuthContext';
import { WindowSizeProvider } from 'contexts/WindowSizeContext';
import Admin from 'components/admin/Admin';
const NavBar = React.lazy(() => import('components/layout/NavBar'));
const Footer = React.lazy(() => import('components/layout/Footer'));
const EditRoom = React.lazy(() => import('components/room/EditRoom'));
const ExistingRooms = React.lazy(() => import('components/room/ExistingRooms'));
const AddRoom = React.lazy(() => import('components/room/AddRoom'));
const Checkout = React.lazy(() => import('components/booking/Checkout'));
const RoomListing = React.lazy(() => import('components/room/RoomListing'));
const FindBooking = React.lazy(() => import('components/booking/FindBooking'));
const Login = React.lazy(() => import('components/auth/Login'));
const Registration = React.lazy(() => import('components/auth/Registration'));
const Profile = React.lazy(() => import('components/auth/Profile'));
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

                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Registration />} />

                  <Route path="/book-room/:roomId" element={<Checkout />} />
                  <Route path="/browse-all-rooms" element={<RoomListing />} />

                  <Route path="/admin" element={<Admin />} />
                  <Route path="/find-booking" element={<FindBooking />} />
                  <Route path="/edit-room/:roomId" element={<EditRoom />} />
                  <Route path="/existing-rooms" element={<ExistingRooms />} />
                  <Route path="/add-room" element={<AddRoom />} />

                  <Route path="/profile" element={<Profile />} />
                  <Route path="/logout" element={<FindBooking />} />
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
