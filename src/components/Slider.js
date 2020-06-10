import React from 'react'
import { Carousel, Row, Col } from 'antd';
import '../assets/css/slider.scss'

const Carou = () => {
    return (
        <div>
            <Carousel autoplay>
                <div>
                <h3>1</h3>
                </div>
                <div>
                <h3>2</h3>
                </div>
                <div>
                <h3>3</h3>
                </div>
                <div>
                <h3>4</h3>
                </div>
            </Carousel>
            <Row>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
    </Row>
        </div>
    )
}

export default Carou
