import React from "react";
import "../assets/css/pageoverview.scss";
import {
    Row, 
    Col, 
    Rate,
    Button
} from "antd";
import {PlusOutlined, CaretRightOutlined} from "@ant-design/icons"

const MovieBanner = () => {
    return(
        <div className="banner-wrapper">
            <Row className="banner-title">
                <Col span={1}></Col>
                <Col span={4}>
                    <h3 className="banner-text">Jojo Rabbit</h3>
                </Col>
                <Col flex="auto"></Col>
            </Row>
            <Row>
                <Col span={1}></Col>
                <Col span={3}>
                    <Rate allowHalf defaultValue={3.5} />
                </Col>
                <Col span={3}><p className="banner-text">2200 reviews</p></Col>
                <Col flex="auto"></Col>
            </Row>
            <Row>
                <Col span={1}></Col>
                <Col span={8}>
                    <p className="banner-text">
                        A World War II satire that follows a lonely German boy 
                        named Jojo (Roman Griffin Davis) whose world view is turned 
                        upside down when he discovers his single mother (Scarlett Johansson) 
                        is hiding a young Jewish girl (Thomasin McKenzie) in their attic. 
                        Aided only by his idiotic imaginary friend, Adolf Hitler (Taika Waititi), 
                        Jojo must confront his blind nationalism. 
                    </p>
                </Col>
            </Row>
            <Row>
                <Col span={1}></Col>
                <Col> 
                    <Button className="banner-btn btn-trailer" size="large"><CaretRightOutlined/>Trailer</Button>
                </Col>
                <Col> 
                    <Button className="banner-btn btn-watchlist" size="large"><PlusOutlined/>Watchlist</Button>
                </Col>
            </Row>
        </div>
    )
}

export default MovieBanner;