import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import {LoginPage} from './views/LoginPage/LoginPage';
import {EmployeeHome} from './views/EmployeeHome/EmployeeHome';
import {ManagerHome} from './views/ManagerHome/ManagerHome';
import { UserProfile } from './views/UserProfile/UserProfile';
import { EditProfile } from './views/EditProfile/EditProfile';
import { PendingPage } from './views/PendingPage/PendingPage';
import{ResolvedPage} from './views/ResolvedPage/ResolvedPage';
import{CreatePage} from './views/CreatePage/CreatePage';
import { ViewEmployees } from './views/ViewEmployees/ViewEmployees';
import { AllResolved } from './views/AllResolved/AllResolved';
import { AllPending } from './views/AllPending/AllPending';


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
                <Route path="/pendingPage" element={<PendingPage />}/>
                <Route path="/resolvedPage" element={<ResolvedPage />}/>
                <Route path="/createPage" element={<CreatePage />}/>
                <Route path="/viewEmployees" element={<ViewEmployees />}/>
                <Route path="/allResolved" element={<AllResolved />}/>
                <Route path="/allPending" element={<AllPending />}/>
            </Routes>
        </BrowserRouter>
  );
  
}

export default App;

/*

*/