import React from 'react';
import {SignUpPage,SignInPage,HomePage, BrowsePage} from './pages'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from "./Routes/PrivateRoute"
import { ForgotPassword } from './components';

export function App() {

  return (
    <Router>
      <AuthProvider>
          <Switch>
            <PrivateRoute exact path='/' component={HomePage}/>
            <Route path='/browse' component={BrowsePage}/>
            <Route path='/signup' component={SignUpPage}/>
            <Route path='/signin' component={SignInPage}/>  
            <Route path='/forgot-password' component={ForgotPassword}/>
          </Switch>
      </AuthProvider>
    </Router>
  );
}
