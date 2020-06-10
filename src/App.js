import React from 'react';
import { Provider } from "react-redux";
import './App.css';
import store from "./stores";
// import HomePage from './pages/HomePage';
// import Routes from "./routes/Routes"

function App() {
  return (
    <Provider store={store} >
      <div>
        {/* <Routes/> */}
      </div>
    </Provider>
  );
}

export default App;

