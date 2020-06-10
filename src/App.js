import React from 'react';
import { Provider } from "react-redux";
import './App.css';
import store from "./stores";
<<<<<<< HEAD
import HomePage from './pages/HomePage';
=======
// import HomePage from './pages/HomePage';
>>>>>>> 4b54b2b8071ab77ff6dbedce9e4e46c1fcc0db26
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

