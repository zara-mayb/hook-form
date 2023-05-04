import React, {useState} from 'react'

const UserForm = (props) => {

    const[firstname, setFirstName] = useState("")
    const[lastname, setLastName] = useState("")
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const[confirmpassword, setConfirmPassword] = useState("")

    return (
        <fieldset>
            <form>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={ (e) => setFirstName(e.target.value) } />
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={ (e) => setLastName(e.target.value) } />
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <div>
                    <label>Confirm Password </label>
                    <input type="password" onChange={ (e) => setConfirmPassword(e.target.value) } />
                </div>
            </form>
            <p>Your Form Data</p>
            <p>First Name: {firstname} </p>
            <p>Last Name: {lastname}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmpassword}</p>
        </fieldset>
    )
}

export default UserForm