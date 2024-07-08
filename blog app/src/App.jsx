import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'

import authService from './servicesAPPW/auth.js';
import { login, logout } from './store/authSlice.js';

import './App.css'
import { Footer, Header } from './components/index.js';

function App() {
 const [loading, setLoading] = useState(true);
 const dispatch = useDispatch();
 
   useEffect(() => {
      authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({userData}));
        }
        else{
          dispatch(logout());
        }

      })
      .finally(() => {
        setLoading(false);
      });
   }, [dispatch]);
  return !loading ? (
  <>
    <Header />
    <Footer />
  </>): null;
}

export default App
