import React from "react";
import "../assets/css/pageoverview.scss";
import {Link} from "react-router-dom";
import {
    Row, 
    Col, 
    Card
} from "antd";
import "../../node_modules/antd/dist/antd.css"
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import MovieBanner from "../components/MovieBanner"

const PageActors = () => {
    const Meta= Card;
    return(
        <div>
            <Header/>
            <MovieBanner/>
             <Row>
                <Col span={1}></Col>
                <Col span={4}><Link to="/overview">Overview</Link></Col>
                <Col span={4}><Link to="/actors">Actors</Link></Col>
                <Col span={4}><Link to="/reviews">Reviews</Link></Col>
            </Row>
            <Row>
                <Col span={4}>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                        <Meta title="random girl" description="Hitler" />
                    </Card>
                </Col>
                <Col span={4}>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                        <Meta title="random girl" description="Jojo"/>
                    </Card>
                </Col>
                <Col span={4}>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                        <Meta title="random girl" description="Jojo's mum"/>
                    </Card>
                </Col>
                <Col span={4}>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                        <Meta title="random girl" description="Jewish girl"/>
                    </Card>
                </Col>
            </Row>
            <Footer/>
        </div>
    )
}

export default PageActors;