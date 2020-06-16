import React, { useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import "../assets/css/profile.scss";
import "../../node_modules/antd/dist/antd.css";
import axios from "axios";
import { Layout, Menu, Row, Col, Avatar, message, /*Card, Rate,*/ Modal, Upload, Button, Input, Progress, Tooltip /*Breadcrumb*/ } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined, EditOutlined } from '@ant-design/icons';
import { editProfile } from "../stores/actions/updateprofile";
import { getWatchlist } from "../stores/actions/userdata"
// import UpdateProfile from '../components/UpdateProfile'
// import {getProfile} from "../stores/actions/userdata"
const token = localStorage.getItem('token')

const ProfilePage = () => {
    // const { SubMenu } = Menu;
    const { Content, Sider } = Layout;
    // const {Meta} = Card;
    const [showModalProfile, setShowModalProfile] = useState(false)
    const [defaultFileList, setDefaultFileList] = useState([]);
    const [progress, setProgress] = useState(0);
    const dispatch = useDispatch()
    const userdata = useSelector(state => state.userdata.profile)
    const [name, setname] = useState()

    const handleOnChange = ({ file, fileList, event }) => {
        // console.log(file, fileList, event);
        //Using Hooks to update the state to the current filelist
        setDefaultFileList(fileList);
        //filelist - [{uid: "-1",url:'Some url to image'}]
      };

    useEffect(() => {
        dispatch(getWatchlist())
    }, [])
  
    const uploadImage = async options => {
    const { onSuccess, onError, file, onProgress } = options;
    const fmData = new FormData();
    const config = {
        headers: { auth: token },
        onUploadProgress: event => {
        const percent = Math.floor((event.loaded / event.total) * 100);
        setProgress(percent);
        if (percent === 100) {
            setTimeout(() => setProgress(0), 1000);
        }
        onProgress({ percent: (event.loaded / event.total) * 100 });
        }
    };
    fmData.append("image", file);
    try {
        const res = await axios.put(
        "https://ga-moviereview.herokuapp.com/api/v1/user",
        fmData,
        config
        );
        onSuccess("Ok");
        console.log("server res: ", res);
    } catch (err) {
        console.log("Eroor: ", err);
        const error = new Error("Some error");
        onError({ error });
    }
    };  
    
    const handleInput = e => {
        setname({
            ...name,
            [e.target.name]: e.target.value
        })
    }

    const handleUpdate = e => {
        dispatch(editProfile(name))
    }

    return(
        <div>
            <Modal
                title="Update Profile"
                visible={showModalProfile}
                onOk={() => handleUpdate()}
                onCancel={() => setShowModalProfile(false)}
            >
                {/* <UpdateProfile/> */}
                <Row style={{marginBottom:'20px'}}>
                    <p>Usernames</p>
                    <Input name='name' placeholder="Input new username" onChange={handleInput} />
                </Row>
                    <p>Update profile photo</p>
                    <div class="container">
                        <Upload
                        accept="image/*"
                        customRequest={uploadImage}
                        onChange={handleOnChange}
                        listType="picture-card"
                        defaultFileList={defaultFileList}
                        className="image-upload-grid"
                        >
                        {defaultFileList.length >= 1 ? null : <div>Upload Button</div>}
                        </Upload>
                        {progress > 0 ? <Progress percent={progress} /> : null}
                    </div>
            </Modal>
            <Layout>
                <Content style={{ padding: '0 50px', background:"#191919" }}>
                {/* <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb> */}
                <Layout className="site-layout-background main-section-wrapper" style={{ padding: '24px 0', background:"#262626", color:"#858585" }}>
                    <Sider className="site-layout-background" width={200} style={{height: "fit-content", background:"#262626"}}>
                        <Col style={{textAlign:"center"}}>
                        <Tooltip title="Click to edit profile" placement='right'>
                             <Avatar size={80} src={userdata? userdata.image : <UserOutlined/>} onClick={() => setShowModalProfile(true)} className="profile-photo" />
                        </Tooltip>
                             <p style={{paddingTop: '10px', fontSize:'18px', padding:'12px 10px 0px 10px'}}>{userdata? userdata.name : ""}</p>
                        </Col>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', background:"#262626", color:"#858585" }}
                        >
                            {/* <SubMenu 
                                key="sub1" 
                                icon={<UserOutlined />} 
                                title="subnav 1"> */}
                            <Menu.Item key="1">My Watchlist</Menu.Item>
                            <Menu.Item key="2">My Review</Menu.Item>
                            {/* <Menu.Item key="3">Most Watched</Menu.Item>
                            <Menu.Item key="4">Suggestions</Menu.Item> */}
                            {/* </SubMenu> */}
                            {/* <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                            <Menu.Item key="5">option5</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                            <Menu.Item key="6">option6</Menu.Item>
                            </SubMenu> */}
                        </Menu>
                    </Sider>
                    <Content style={{ padding: '0 24px', minHeight: 280, width:"50%", background:"#262626", color:"#858585" }}>
                        <h2 style={{color:"#858585"}}>My Watchlist</h2>
                        <Row>
                            <Col span={8}></Col>
                            <Col span={8}></Col>
                            <Col span={8}></Col>
                        </Row>
                    </Content>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>Movie Details</Content>
                </Layout>
                </Content>
            </Layout>
            {/* {updateProfile} */}
        </div>
    )
}
export default ProfilePage;