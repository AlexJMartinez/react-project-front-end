import React from 'react'

const Login = ({handleLoginFormChange, handleLoginFormSubmit, email, password}) => {

    

    return (
        <div className="Login">
            <form id="loginForm" onSubmit={handleLoginFormSubmit}>
                <input 
                       type="text"
                       name="email"
                       placeholder="email"
                       onChange={handleLoginFormChange}
                       value={email}
                       />
                <input 
                       type="password"
                       name="password"
                       placeholder="password"
                       onChange={handleLoginFormChange}
                       value={password}
                       />
                <input 
                       type="submit"
                       value="Login"
                       />
            </form>
        </div>
    )

}


export default Login