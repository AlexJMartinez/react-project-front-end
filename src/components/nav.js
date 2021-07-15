import React from 'react' 
import {NavLink} from 'react-router-dom';

const link = {
    width: '100px',
    padding: '5px',
    margin: '0 6px 6px',
    background: 'black',
    textDecoration: 'none',
    color: 'white',
    textAlign: 'center'
  }


const Nav = (props) => {

    return (
        <div className="nav">
            <NavLink style={link} to="/">Home</NavLink>
            <NavLink style={link} to="/login">Login</NavLink>
            <NavLink style={link} to="/user/{this.props.user.id}">Profile</NavLink>
            <NavLink style={link} to="/signup">Signup</NavLink>
        </div>
    )
}


export default Nav