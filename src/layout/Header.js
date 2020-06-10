import React, {useState} from "react";
import {Input, 
        Row, 
        Col,
        Menu,
        Dropdown,
        message
} from "antd";
import {UserOutlined} from "@ant-design/icons"
import {SearchOutlined} from "@ant-design/icons";
import "../assets/css/header.css"

const Header = () => {
    const [movie, setMovie] = useState("");
    const [showProfile, setShowProfile] = useState(false)
    
    const {Search} = Input;

    const suffix = (
        <SearchOutlined
            style={{
                fontSize: 16,
                color: "#858585",
                margin:0
            }}
        />
    );

    const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
    };

    const ProfileMenu = (
    <Menu onClick={onClick}>
        <Menu.Item key="1">Profile</Menu.Item>
        <Menu.Item key="2">Settings</Menu.Item>
        <Menu.Item key="3">Help</Menu.Item>
        <Menu.Item key="4">Sign out</Menu.Item>
    </Menu>
    );

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
                    {showProfile ? 
                        (
                            <Dropdown overlay={ProfileMenu} onClick={()=> setShowProfile(false)}>
                                <div 
                                    className="ant-dropdown-link header_margin" 
                                    style={{color:"#858585", cursor:"pointer", display:"flex"}}
                                    onClick={e => e.preventDefault()}>
                                    <UserOutlined/>
                                    <p>Hi, username</p>
                                </div>
                            </Dropdown>
                        )
                        :
                        (<p className="sign-in header_margin"
                                style={{color:"#858585", cursor:"pointer"}}
                                onClick={()=> setShowProfile(true)}>Sign in</p>
                        )
                    }
                </Col>
            </Row>
        </div>
    )
}

export default Header;