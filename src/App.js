import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ListView from "./components/list-view";
import Step1 from './components/step1';
import Step2 from './components/step2';
function App() {
  return (
    <React.Fragment>  
      <Routes>
      <Route path={'/'} element={<ListView />} />
        <Route path={'/step1'} element={<Step1 />} />
        <Route path={'/step2'} element={<Step2 />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
