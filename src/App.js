import React from 'react';
import './App.css'
import ProfileContainer from './containers/ProfileContainer'
import Login from './components/login'
import Signup from './components/signup'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import history from './history'
import Nav from './components/nav'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: null,
      loginForm: {
        email: "", 
        password: ""
      }
    }
  }

  handleLoginFormChange = event => {
    const {name, value} = event.target
    this.setState({
      loginForm: {
        ...this.state.loginForm, 
        [name]: value
      }
    })
  }

  handleLoginFormSubmit = event => {
    event.preventDefault()
    
    
    const userInfo = this.state.loginForm
    const headers = { 
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }, 
      body: JSON.stringify({
         user: userInfo
      })
    }
    
    fetch("http://localhost:3001/login", headers)
      .then(response => response.json())
      .then(userJSON => {
        
        if (userJSON.error) {
          alert("Invalid credentials")
        } else {
          this.setState({
            currentUser: userJSON
          })
          
          history.push(`/user/${userJSON.id}`)
        }
      })
            
}

  

  render() {

    const {currentUser} = this.state  

    return (
    <div className="App">
            <Router>
                <Nav user={currentUser}/>
              <Switch>
                <Route path="/user/:id" component={ProfileContainer}/>
                <Route path="/login">
                  <Login 
                    handleLoginFormChange={this.handleLoginFormChange}
                    handleLoginFormSubmit={this.handleLoginFormSubmit}
                    email={this.state.loginForm.email}
                    password={this.state.loginForm.password}/>
                </Route>
                <Route path="/signup">
                  <Signup
                    handleLoginFormChange={this.handleLoginFormChange}
                    handleLoginFormSubmit={this.handleLoginFormSubmit}
                    email={this.state.loginForm.email}
                    password={this.state.loginForm.password}/>
                </Route>
              </Switch>
            </Router>
        
    </div>
           );}
}


export default App;
