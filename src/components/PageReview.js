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
    Rate,
    Tooltip
} from "antd";
import "../../node_modules/antd/dist/antd.css"
import MovieBanner from "./MovieBanner";
// import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';

const PageReview = () => {
    let token = localStorage.getItem("token")
    let {id} = useParams()
    const dispatch = useDispatch()
    const [review, setReview] = useState({
        comment: "",
        rating: null
    })
    const data = review
    const reviews= useSelector(state => state.review.comments)
    const [value, setValue] = useState()
    
    // console.log("komen", reviews)

    const handleChange = value => {
        // dispatch(postRating(id, rating))
        console.log(value)
        setValue(value)
        setReview({rating: value})
    }

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
        handleError()
        dispatch(postReview(id, data))
        setReview({comment:" "})
    }

    const handleError = () => {
        if (token===null) {
            alert("please sign in first")
        }
    }
    return(
        <div>
            <Form>
                <Form.Item
                    name="comment"
                    // rules={[{ required: true, message: 'Please input your review!' }]}
                >
                    <Rate allowHalf value={value} onChange={handleChange} />
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
                            author={<p>{item.User.name}</p>}
                            avatar={
                                <Avatar
                                src={item.User.Image.url}
                                alt="Han Solo"
                                />
                            }
                            content={
                                <div>
                                    <p>{item.comment}</p>
                                    <Rate disabled value={item.rating}/>
                                </div>
                                  
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