import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Log from './Pages/login/log';
// import logo from './logo.svg';
// import './App.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Log}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}





export default App;



