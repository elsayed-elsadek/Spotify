import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom'; // Corrected import
import './index.css';
import Playercontextprovider from './context/PlayerContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <Playercontextprovider>
     <App />
     </Playercontextprovider>
    </BrowserRouter>
  </StrictMode>,
);
