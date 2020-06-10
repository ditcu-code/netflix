import React from 'react';
import { Provider } from "react-redux";
import './App.css';
import store from "./stores";
import HomePage from './pages/HomePage';
import Header from './layout/Header';
import Footer from './layout/Footer'
// import Routes from "./routes/Routes"

function App() {
  return (
    <Provider store={store} >
      <div>
        <HomePage/>
        {/* <Routes/> */}
      </div>
    </Provider>
  );
}

export default App;

