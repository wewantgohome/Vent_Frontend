import React from 'react';
import { Routes, Route } from "react-router-dom";

//Page
import Home from './page/Home/Home.jsx'
import Page404 from './page/Page404/Page404.jsx'
import Signin from './page/Signin/Signin.jsx'
import Signup from './page/Signup/Signup.jsx'
import CreateEvent from './page/CreateEvent/CreateEvent.jsx';
import Envent from './page/Event/Envent.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/create" element={<CreateEvent />}></Route>
      <Route path="/event" element={<Envent />}></Route>
      <Route path="/signin" element={<Signin />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="*" element={<Page404 />}></Route>
    </Routes>
  );
}

export default App;
