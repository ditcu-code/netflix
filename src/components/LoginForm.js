import React, {useState} from "react";

export const LoginForm = () => {
    const [login, setLogin] = useState({
        name: '',
        password: ''
    })

    const handleChange = (e) => {
        setLogin({
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(login)
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input type="name" value={login.name} name='name' placeholder='name' onChange={handleChange} />
                <input type="password" value={login.password} name='password' placeholder='password' onChange={handleChange} />
                <input type="submit" />
            </form>
        </div>
    )
}
