import React from "react";
import "./style.css";
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'
import HomePage from './pages/HomePage'
import UsersPage from './pages/UsersPage'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path= "/" element={<HomePage/>}>
        <Route path= "users" element={<UsersPage/>}/>
        </Route>
        <Route path= "*" element={<ErrorPage/>}/>
      </Routes>
      </Router>
  );
}