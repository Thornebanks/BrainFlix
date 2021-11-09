import Home from './Pages/Home/Home';
import UploadPage from './Pages/UploadPage/UploadPage';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';

function App (){
  return(
    <>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/upload" component={UploadPage}/>
        <Route path="/:id" component={Home}/>
      </Switch>
    </BrowserRouter>
    </>
  )
}

export default App;