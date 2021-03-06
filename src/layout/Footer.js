import React from "react";
import {Row, Col} from "antd";
import {
    InstagramFilled,
    FacebookFilled,
    YoutubeFilled,
    TwitterOutlined
} from "@ant-design/icons";
import "../assets/css/footer.scss"

const Footer = () => {
    return(
        <div 
            className="footer_wrapper"
            style={{
                width: "100%"
            }}
        >
            <Row>
                <Col className="footer-logo_margin">
                    <img 
                        src={require("../assets/images/Netflix_logo.png")} 
                        alt="netflix"
                        style={{width:"10%"}}
                    />
                </Col>
            </Row>
            <Row className="footer-item_margin">
                <Col flex="auto"></Col>
                <Col span={3} className="footer-item">
                    <p><strong>MORE NETFLIX</strong></p>
                    <p>Blog</p>
                    <p>Media</p>
                    <p>About Us</p>
                    <p>Career</p>
                </Col>
                <Col span={3} className="footer-item">
                    <p><strong>SUPPORT</strong></p>
                    <p>Privacy Policy</p>
                    <p>Terms of Use</p>
                </Col>
                <Col span={3} className="footer-item">
                    <p><strong>FRIENDS</strong></p>
                    <p>Partners</p>
                </Col>
                <Col span={3} className="footer-item">
                    <p><strong>GET YOUR APP</strong></p>
                    <p>Android</p>
                    <p>iOS</p>
                </Col>  
                <Col flex="auto"></Col>
            </Row>
            <Row>
                <Col span={24}>
                    <InstagramFilled className="socmed-icon" />
                    <FacebookFilled className="socmed-icon"/>
                    <YoutubeFilled className="socmed-icon" />
                    <TwitterOutlined className="socmed-icon" />
                </Col>
            </Row>
        </div>
    )
}

export default Footer;