import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Study from './components/routes/study/Study.jsx';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} ></Route>

            <Route path='/study' element={<Study/>} ></Route>
        </Routes>
    </BrowserRouter>
</React.StrictMode>);

