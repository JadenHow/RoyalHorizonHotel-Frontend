import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from 'contexts/AuthContext';
import { WindowSizeProvider } from 'contexts/WindowSizeContext';
import NavBar from 'components/layout/NavBar';
import Footer from 'components/layout/Footer';
// import EditRoom from 'components/room/EditRoom/EditRoom';
import ExistingRooms from 'components/room/ExistingRooms';
import AddRoom from 'components/room/AddRoom';
// import Checkout from 'components/booking/Checkout/Checkout';
// import RoomListing from 'components/room/RoomListing/RoomListing';
// import Admin from 'components/admin/Admin';
// import BookingSuccess from 'components/booking/BookingSuccess/BookingSuccess';
// import Bookings from 'components/booking/Bookings/Bookings';
// import FindBooking from 'components/booking/FindBooking/FindBooking';
import Login from 'components/auth/Login';
import Registration from 'components/auth/Registration';
import Profile from 'components/auth/Profile';
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
                  {/* <Route path="/edit-room/:roomId" element={<EditRoom />} /> */}
                  <Route path="/existing-rooms" element={<ExistingRooms />} />
                  <Route path="/add-room" element={<AddRoom />} />

                  {/* <Route path="/book-room/:roomId" element={<Checkout />} />
                  <Route path="/browse-all-rooms" element={<RoomListing />} />

                  <Route path="/admin" element={<Admin />} />
                  <Route path="/booking-success" element={<BookingSuccess />} />
                  <Route path="/existing-bookings" element={<Bookings />} />
                  <Route path="/find-booking" element={<FindBooking />} /> */}

                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Registration />} />

                  <Route path="/profile" element={<Profile />} />
                  {/* <Route path="/logout" element={<FindBooking />} /> */}
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
