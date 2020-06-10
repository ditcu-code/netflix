import React, {useState, useEffect} from 'react';
// import {useHistory} from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../stores/actions/auth";
import {Button, Input} from "antd";

export default function LoginForm () {
<<<<<<< HEAD
    const dispatch = useDispatch()
=======
    // const dispatch = useDispatch()
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    // const history = useHistory();

>>>>>>> 4b54b2b8071ab77ff6dbedce9e4e46c1fcc0db26
    // useEffect(() => {
    //     if(user){
    //         history.push('/')
    //     }
    // })

    const [input, setInput] = useState(
        {
            email: '',
            password: '',
        }
    )

    const handleInput = e => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    
    const handleLogin = () => {
        //   dispatch(login(input))
        }
      

    return (
        <div className="container-right">
            <div className="header">Login to Task Manager</div>
            <div className="content">
                <div className="form">
                    <div className="form-group">
                        <Input type="text" name="email" placeholder="email" onChange={handleInput}/>
                    </div>
                    <div className="form-group">
                        <Input type="password" name="password" placeholder="password" onChange={handleInput}/>
                    </div>
                </div>
            </div>
            <div className="footer">
                <Button size="large" type="primary" shape="round" onClick={() => handleLogin()}>LOGIN</Button>
            </div>
        </div>
    )
}
