import React, {useState} from "react";
import { useSelector } from "react-redux";
import "../assets/css/profile.scss";
import "../../node_modules/antd/dist/antd.css";
import { Layout, Menu, Row, Col, Avatar, /*Card, Rate,*/ Modal, Upload, Button, Input /*Breadcrumb*/ } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined, UploadOutlined } from '@ant-design/icons';
// import UpdateProfile from '../components/UpdateProfile'
// import {getProfile} from "../stores/actions/userdata"

const ProfilePage = () => {
    const { SubMenu } = Menu;
    const { Content, Sider } = Layout;
    // const {Meta} = Card;
    const [showModalProfile, setShowModalProfile] = useState(false)
    // const [confirmLoading, setConfirmLoading] = useState(false)
    // const dispatch = useDispatch()
    const userdata = useSelector(state => state.userdata.profile)
    const updateProfile = useSelector(state => state.updateProfile.name)
    const [data, setdata] = useState(
        {
            name: '',
            image: '',
        }
    )

    const handleInput = e => {
        setdata({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    console.log("updateProfile", updateProfile, 'data', data)

    // useEffect(() =>{
    //     dispatch(getProfile())
    // }, [getProfile])

    // const updateProfile = (
    //     <Modal
    //         title="Update Profile"
    //         visible={setShowModalProfile(true)}
    //         onCancel={() => setShowModalProfile(false)}
    //     >
    //         <p>Test</p>
    //     </Modal>
    // )

    return(
        <div>
            <Modal
                title="Update Profile"
                visible={showModalProfile}
                onCancel={() => setShowModalProfile(false)}
            >
                {/* <UpdateProfile/> */}
                <Row style={{marginBottom:'20px'}}>
                    <p>Username</p>
                    <Input name='name' placeholder="Input new username" onChange={handleInput} />
                </Row>
                    <p>Update profile photo</p>
                    <Upload {...data} name='image' >
                        <Button>
                            <UploadOutlined /> Upload
                        </Button>
                    </Upload>
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
                             <Avatar size={80} src={userdata? userdata.image : <UserOutlined/>} onClick={() => setShowModalProfile(true)} className="profile-photo" />
                             <p style={{paddingTop: '10px', fontSize:'22px'}}>{userdata? userdata.name : ""}</p>
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
                            <Menu.Item key="2">Continue to Watch</Menu.Item>
                            <Menu.Item key="3">Most Watched</Menu.Item>
                            <Menu.Item key="4">Suggestions</Menu.Item>
                            {/* </SubMenu> */}
                            <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                            <Menu.Item key="5">option5</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                            <Menu.Item key="6">option6</Menu.Item>
                            </SubMenu>
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