import React from 'react';
import Profile from './components/profile'
import Login from './components/login'


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
        }
      })
      
      
      
     
     
      
}

  

  render() {
    const {currentUser} = this.state
    return (
    <div className="App">
        <h1>{currentUser ? `Logged in as ${currentUser.name}` :
            "Welcome" }</h1>
        <Login 
               handleLoginFormChange={this.handleLoginFormChange}
               handleLoginFormSubmit={this.handleLoginFormSubmit}
               email={this.state.loginForm.email}
               password={this.state.loginForm.password}/>
        <Profile user={this.props.currentUser}/>
    </div>
           );}
}

export default App;
