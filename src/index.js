import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Discover from './component/Discover';
import Newreleases from './component/Newreleases';
import Upcoming from './component/Upcoming'
import Favorites from './component/Favorites';
import Search from './component/Search';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename={window.location.pathname || ''}>
      <Routes>
        <Route path='/' element={<App />} >
          <Route index element={<Discover />}/>
          <Route path='/new-releases' element={<Newreleases />}/>
          <Route path='/upcoming' element={<Upcoming />}/>
          <Route path='/favorites' element={<Favorites />}/>
          <Route path='/search/:searchData' element={<Search/>}/>
        </Route>
      </Routes>
    </Router>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
