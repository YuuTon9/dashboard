import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './Components/layout/Navbar'
import Dashboard from './Components/dashboard/dashboard'
import PostDetails from './Components/projects/postdetails' 
import CreatePost from './Components/projects/createpost'
import SignIn from './Components/auth/signin'
import SignUp from './Components/auth/signup'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/project/:id' component={PostDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreatePost}/>
          </Switch>
        </div>
      </BrowserRouter>
    );    
  }
}

export default App;
