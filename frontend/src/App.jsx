import { Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import MainPage from './Pages/MainPage'
import LogInPage from './Pages/LogInPage'
import RegistrationPage from './Pages/RegistrationPage'
import Layout from './Components/Layout'
import SolarWatchPage from './Pages/SolarWatchPage'
import ProtectedRoutes from './Components/ProtectedRoutes';


function App() {
  const [jwt, setJwt] = useState()
  return (
    <Layout jwt={jwt} jwtSetter={setJwt}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LogInPage jwtSetter={setJwt} />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route element={<ProtectedRoutes />} >
          <Route path='/solarwatch' element={<SolarWatchPage />} />
        </Route>

      </Routes>
    </Layout>
  );
}

export default App;
