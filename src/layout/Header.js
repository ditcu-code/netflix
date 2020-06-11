import React, {useState, useEffect} from 'react';
import {Input, Row, Col, Modal, Menu, Form, Dropdown, Checkbox, Avatar} from "antd";
import {UserOutlined, MailOutlined, LockOutlined, SearchOutlined} from "@ant-design/icons"
import "../assets/css/header.scss"
import { useDispatch, useSelector } from "react-redux";
import { login, signOut, register } from "../stores/actions/auth";
// import {useHistory} from "react-router-dom";

const Header = () => {
    // const user = localStorage.getItem('token');
    // const history = useHistory()
    const dispatch = useDispatch()
    const [movie, setMovie] = useState("");
    const [modalLogin, setModalLogin] = useState(false)
    const [modalRegister, setModalRegister] = useState(false)
    const isAuthenticate = useSelector(state => state.auth.isAuthenticate)
    const [input, setInput] = useState(
        {
            email: '',
            password: '',
        }
    )

    useEffect(() => {
        toogleLogin()
    })
 
    const toogleLogin = () => {
        if(isAuthenticate === false ){
            console.log("token tidak ada", isAuthenticate)
        } 
        else{
            console.log("token ada", isAuthenticate)
        }
    }

    const handleInput = e => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    
    const handleLogin = props => {
        dispatch(login(input))
        setModalLogin(false)
        // props.history.push('/')
    }

    const handleRegister = () => {
        dispatch(register(input))
        setModalRegister(false)
        // props.history.push('/')
    }

    
    const handleSignOut = () => {
        dispatch(signOut())
        window.location.reload()
    }

    const {Search} = Input;
    
    const suffix = (
        <SearchOutlined
        style={{
            fontSize: 18,
            color: "#858585",
            margin:0
        }}
        />
    );
        
    // const onClick = ({ key }) => {
    // };
        
    const ProfileMenu = (
        <Menu>
            <Menu.Item key="1">Profile</Menu.Item>
            <Menu.Item key="2">Settings</Menu.Item>
            <Menu.Item key="3">Help</Menu.Item>
            <Menu.Item key="4" onClick={handleSignOut} >Sign out</Menu.Item>
        </Menu>
    );

    const LoginModal = (
        <Modal title="Login" okText="Login" visible={modalLogin} onOk={()=>  handleLogin()} onCancel={()=> setModalLogin(false)} cancelButtonProps={{ style: { display: 'none' } }}>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
            >
                <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input name="email" prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email"  onChange={handleInput}/>
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input
                    name="password"
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                    onChange={handleInput}
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                </Form.Item>
                    Don't have an account yet? <a href onClick={ () => setModalLogin(false) & setModalRegister(true)}>register now!</a>
            </Form>
        </Modal>
    )

    const RegisterModal = (
        <Modal title="Register" okText="Register" visible={modalRegister} onOk={()=>  handleRegister()} onCancel={()=> setModalRegister(false)} cancelButtonProps={{ style: { display: 'none' } }}>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
            >
                <Form.Item
                    name="name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                >
                    <Input name="name" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username"  onChange={handleInput}/>
                </Form.Item>
                <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input name="email" prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email"  onChange={handleInput}/>
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input
                    name="password"
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                    onChange={handleInput}
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                </Form.Item>
                    Already have login and password? <a  href onClick={ () => setModalRegister(false) & setModalLogin(true)}>Sign in</a>
            </Form>
        </Modal>
    )

    return(
        <div className="header_wrapper">
            <Row className="header-items_wrapper">
                <Col span={4}>
                    <img 
                        className="header_margin"
                        src={require("../assets/images/Netflix_logo.png")}
                        style={{width:"50%"}}
                        alt="netflix"
                    />
                </Col>
                <Col span={16}>
                    <Search
                        placeholder="search movie..."
                        enterButton={suffix}
                        // size="large"
                        value={movie}
                        onChange={(e)=> setMovie(e.target.value)}
                        style={{width:"70%"}}
                        className="header_margin"
                    />
                </Col>
                <Col span={4}>
                    {isAuthenticate ? 
                        (
                            <Dropdown overlay={ProfileMenu} >
                                <div 
                                    className="ant-dropdown-link header_margin" 
                                    style={{color:"#858585", cursor:"pointer", display:"flex"}}
                                    onClick={e => e.preventDefault()}>
                                    <Avatar icon={<UserOutlined />} className="avatar" />
                                    <p className="username">Hi, Username</p>
                                </div>
                            </Dropdown>
                        )
                        :
                        (<p className="sign-in header_margin"
                                style={{color:"#858585", cursor:"pointer"}}
                                onClick={()=> setModalLogin(true) }>Sign in</p>
                        )
                    }
                </Col>
            </Row>
            {LoginModal}
            {RegisterModal}
        </div>
    )
}

export default Header;
