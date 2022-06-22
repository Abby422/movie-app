import React from 'react'
import './App.css';
import Sidebar  from "./component/Sidebar";
import {Provider} from 'react-redux'
import { Outlet } from 'react-router-dom'
import store from './redux/store';




function App() {
  return (
    <Provider store={store} >
      <div className="App">
            <Sidebar />
            <Outlet />
      </div>
    </Provider>
  );
}

export default App;
