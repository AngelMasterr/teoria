import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hola_mundo from './componentes/Hola_mundo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Hola_mundo />
    </React.StrictMode>
);
