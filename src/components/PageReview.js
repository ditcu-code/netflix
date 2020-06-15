import React, {useState, useEffect} from "react";
import "../assets/css/pageoverview.scss";
import {useParams} from "react-router-dom";
import {reviewList} from "../stores/actions/review";
import {useDispatch, useSelector} from "react-redux";
import {postReview} from "../stores/actions/review";
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
    let {id} = useParams()
    const dispatch = useDispatch()
    const [review, setReview] = useState({
        comment: "",
        rating: 1
    })
    const data = review
    const reviews= useSelector(state => state.review.comments)
    // console.log("komen", reviews)

    console.log(id, data)
    useEffect(() => {
        dispatch(reviewList(id))
    }, [])
    
    const handleInput = e => {
        setReview({
            ...review,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {
        dispatch(postReview(id, data))
    }

    return(
        <div>
            <Form>
                <Form.Item
                    name="comment"
                    rules={[{ required: true, message: 'Please input your review!' }]}
                >
                    <Input placeholder="Add your review..." allowClear value={review.comment}  name="comment" onChange={handleInput} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" onClick={handleSubmit}>Submit</Button>
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