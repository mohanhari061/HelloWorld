import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HeadProvider } from 'react-head';

import {CssBaseline} from "@mui/material";
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <CssBaseline/>      
      <App />  
    </HelmetProvider>   
  </StrictMode>,
)
