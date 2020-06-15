import React from "react";
import "../assets/css/pageoverview.scss";
import {Link} from "react-router-dom";
import {
    Row, 
    Col, 
    Divider, 
    Comment,
    Avatar,
    Tooltip
} from "antd";
import "../../node_modules/antd/dist/antd.css"
import MovieBanner from "./MovieBanner";
// import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';

const PageReview = () => {
    
    return(
        <div>
            <MovieBanner/>
            <Row>
                <Col span={1}></Col>
                <Col span={4}><Link to="/overview">Overview</Link></Col>
                <Col span={4}><Link to="/actors">Actors</Link></Col>
                <Col span={4}><Link to="/reviews">Reviews</Link></Col>
            </Row>
            <div>
                <Comment
                    author={<a>Han Solo</a>}
                    avatar={
                        <Avatar
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        alt="Han Solo"
                        />
                    }
                    content={
                        <p>
                        We supply a series of design principles, practical patterns and high quality design
                        resources (Sketch and Axure), to help people create their product prototypes beautifully
                        and efficiently.
                        </p>
                    }
                />
                <Comment
                    author={<a>Ben Solo</a>}
                    avatar={
                        <Avatar
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        alt="Han Solo"
                        />
                    }
                    content={
                        <p>
                        We supply a series of design principles, practical patterns and high quality design
                        resources (Sketch and Axure), to help people create their product prototypes beautifully
                        and efficiently.
                        </p>
                    }
                />
                <Comment
                    author={<a>Leia Solo</a>}
                    avatar={
                        <Avatar
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        alt="Han Solo"
                        />
                    }
                    content={
                        <p>
                        We supply a series of design principles, practical patterns and high quality design
                        resources (Sketch and Axure), to help people create their product prototypes beautifully
                        and efficiently.
                        </p>
                    }
                />
            </div>
        </div>
    )
}

export default PageReview;