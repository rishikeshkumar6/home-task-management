import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ResponsiveAppBar from './components/Navbar/Navbar';
import ProtectedRoutng from './components/ProtectedRouting/ProtectedRouting';
import UserProfile from './components/UserProfile/userProfile';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path="/register" element={<Register />}></Route>
    <Route path="/login" element={<Login />}></Route>

    <Route element={<ProtectedRoutng/>}>
    <Route path="/" element={<App />}></Route>
    <Route path="/userprofile" element={<UserProfile/>}></Route>
    </Route>
  </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
