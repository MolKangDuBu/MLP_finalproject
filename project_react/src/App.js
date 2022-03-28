import logo from './logo.svg';
import './App.css';

import { Routes, Route, Outlet, Link, NavLink } from "react-router-dom";
import Main from './component/Main';

function App() {
  return (
    
    <div className="App">
         <h1>Basic Example</h1>
      <Routes>

         <Route path="/main" element = {<Main/>}/>

    
      </Routes>

    </div>
  );
}

export default App;
