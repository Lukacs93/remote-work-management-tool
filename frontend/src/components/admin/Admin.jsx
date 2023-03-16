import React, {useState} from 'react';
import './Admin.css'

const Admin = ({  }) => {

return(
    <div className="admin-container">
        <div className="title">Register a user</div>
        <div className="content">
            <form onSubmit={handleSubmit}>
                <div className="user-details">
                    <div className="input-box">
                        <span className="details">First Name</span>
                        <input onChange={(e) => setRegisterForm({...registerForm, firstName: e.target.value})}
                               type="text" placeholder="Enter your name" required/>
                    </div>
                    <div className="input-box">
                        <span className="details">Last Name</span>
                        <input onChange={(e) => setRegisterForm({...registerForm, lastName: e.target.value})}
                               type="text" placeholder="Enter your name" required/>
                    </div>
                    <div className="input-box">
                        <span className="details">Username</span>
                        <input onChange={(e) => setRegisterForm({...registerForm, username: e.target.value})}
                               type="text" placeholder="Enter your username" required/>
                    </div>
                    <div className="input-box">
                        <span className="details">Email</span>
                        <input onChange={(e) => setRegisterForm({...registerForm, email: e.target.value})}
                               type="text" placeholder="Enter your email" required/>
                    </div>
                    <div className="input-box">
                        <span className="details">Password</span>
                        <input onChange={(e) => setRegisterForm({...registerForm, password: e.target.value})}
                               type="text" placeholder="Enter your password" required/>
                    </div>
                    <div className="input-box">
                        <span className="details">Confirm Password</span>
                        <input onChange={(e) => setRegisterForm({...registerForm, confirmPassword: e.target.value})}
                               type="text" placeholder="Confirm your password" required />
                    </div>
                    <div className="input-box">
                        <span className="details">Select Role</span>
                        {/*<input type="text" placeholder="Enter Role" required/>*/}
                        <select onChange={(e) => setRegisterForm({...registerForm, role: e.target.value})}
                                className="task-status-dropdown">
                            <option value='select'></option>
                            <option value='user'>User</option>
                            <option value='Admin'>Admin</option>
                            <option value='ProjectManager'>Project Manager</option>
                        </select>
                    </div>
                </div>
                <div className="gender-details">
                    {/*<input type="radio" name="gender" id="dot-1" />*/}
                    {/*    <input type="radio" name="gender" id="dot-2" />*/}
                    {/*        <input type="radio" name="gender" id="dot-3"/>*/}
                    {/*            <span className="gender-title">Gender</span>*/}
                    {/*            <div className="category">*/}
                    {/*                <label htmlFor="dot-1">*/}
                    {/*                    <span className="dot one"></span>*/}
                    {/*                    <span className="gender">Male</span>*/}
                    {/*                </label>*/}
                    {/*                <label htmlFor="dot-2">*/}
                    {/*                    <span className="dot two"></span>*/}
                    {/*                    <span className="gender">Female</span>*/}
                    {/*                </label>*/}
                    {/*                <label htmlFor="dot-3">*/}
                    {/*                    <span className="dot three"></span>*/}
                    {/*                    <span className="gender">Prefer not to say</span>*/}
                    {/*                </label>*/}
                    {/*            </div>*/}
    
                </div>
                <div className="button">
                    <input type="submit" value="Register" />
                </div>
            </form>
        </div>
    </div>
    )
}

export default Admin


