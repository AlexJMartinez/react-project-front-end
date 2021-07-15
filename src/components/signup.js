import React from 'react'

const Signup = ({handleLoginFormChange, handleLoginFormSubmit, email, password}) => {

    

    return (
        <div className="Signup"><br/>
            <form id="signupForm" onSubmit={handleLoginFormSubmit}>
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
                       /><br/><br/>
                <input 
                       type="submit"
                       value="Signup"
                       />
            </form>
        </div>
    )

}


export default Signup