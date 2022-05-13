import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {LoginPage} from './views/LoginPage/LoginPage';
import {EmployeeHome} from './views/EmployeeHome/EmployeeHome';


function App() {
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/employeeHome" element={<EmployeeHome />}/>
            </Routes>
        </BrowserRouter>
  );
  
}

export default App;

/*

*/