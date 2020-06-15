import React, {useState} from "react";
import "../assets/css/pageoverview.scss";
import {Link} from "react-router-dom";
import {reviewList} from "../stores/actions/review";
import {useSelector} from "react-redux";
import {
    Row, 
    Col, 
    Divider, 
    Comment,
    Avatar,
    Form,
    Input,
    Button,
    Tooltip
} from "antd";
import "../../node_modules/antd/dist/antd.css"
import MovieBanner from "./MovieBanner";
// import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';

const PageReview = () => {
    
    const [review, setReview] = useState("")
    const reviews= useSelector(state => state.review.comments)
    console.log("komen", reviews)


    return(
        <div>
            <Form>
                <Form.Item
                    name="review"
                    rules={[{ required: true, message: 'Please input your review!' }]}
                >
                    <Input placeholder="Add your review..." allowClear value={review} onChange={e => setReview(e.target.value)} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
            <div>
                {reviews.length ?
                    reviews.map(item => 
                        <Comment
                            author={<a>Anonymous User</a>}
                            avatar={
                                <Avatar
                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                alt="Han Solo"
                                />
                            }
                            content={
                                <p>{item.comment}</p>  
                            }
                        />
                    )
                    :
                    <p>No reviews yet.</p>
                } 
                {/* {reviews.map(item => 
                    <Comment
                        author={<a>Han Solo</a>}
                        avatar={
                            <Avatar
                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                            alt="Han Solo"
                            />
                        }
                        content={
                            <p>{item.comment}</p>  
                        }
                    /> 
                )} */}
            </div>
        </div>
    )
}

export default PageReview;