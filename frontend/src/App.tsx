import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import {LoginPage} from './views/LoginPage/LoginPage';
import {EmployeeHome} from './views/EmployeeHome/EmployeeHome';
import {ManagerHome} from './views/ManagerHome/ManagerHome';
import { UserProfile } from './views/UserProfile/UserProfile';
import { EditProfile } from './views/EditProfile/EditProfile';


function App() {
  return (
    <BrowserRouter>
            <Routes>
              <Route path ="*" element = {<Navigate to= "/login" replace />} />
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/employeeHome" element={<EmployeeHome />}/>
                <Route path="/managerHome" element={<ManagerHome />}/>
                <Route path="/userProfile" element={<UserProfile />}/>
                <Route path="/editProfile" element={<EditProfile />}/>
            </Routes>
        </BrowserRouter>
  );
  
}

export default App;

/*

*/