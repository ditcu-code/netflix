import React, {useEffect, useState} from "react";
import "../assets/css/pageoverview.scss";
import {
    Row, 
    Col, 
    Rate,
    Button,
    Modal
} from "antd";
import {PlusOutlined, CaretRightOutlined} from "@ant-design/icons"
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {reviewList} from "../stores/actions/review"


const MovieBanner = () => {
    const dispatch = useDispatch()
    const [visible, setVisible]= useState(false)
    const movieDetail = useSelector(state => state.movies.movieId)
    const bannerBackground = useSelector (state => state.movies.Images.url)
    const trailer = useSelector (state => state.movies.Videos)
    const [IdChange, setIdChange] = useState(false)
    let{id} = useParams()
    const [value, setValue] = useState(0)
    const rating = useSelector(state => state.review.average)
    const reviews = useSelector (state => state.review.count)
    // console.log("ratingres", rating)

    useEffect(() => {
        if (IdChange === false) { //aku bikin ini biar ga looping
            dispatch(reviewList(id)) //id nya bonceng dispatch 
            setIdChange(!!setIdChange)
        }
        })
    // dispatch(reviewList(id))

    return(
        <div className="banner-wrapper" style={{backgroundImage: `url(${bannerBackground})` }} >
            <Modal
                title=""
                visible={visible}
                onCancel={()=> setVisible(false)}
                width="800px"
                footer={null}
                centered={true}
                >
                <iframe width="700" height="400" src={`https://www.youtube.com/embed/${trailer}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
            </Modal>
            <Row className="banner-title">
                <Col span={1}></Col>
                <Col span={4}>
                    <h3 className="banner-text">{movieDetail.title}</h3>
                </Col>
                <Col flex="auto"></Col>
            </Row>
            <Row>
                <Col span={1}></Col>
                <Col span={3}>
                    <Rate allowHalf value={rating} /*blm ada fungsi submit rating*/ />
                </Col>
                <Col span={3}>
                    {/*msh harus dibikin condition kalo jumlah review 0*/}
                     <p className="banner-text">{reviews} review(s)</p>
                </Col>
                <Col flex="auto"></Col>
            </Row>
            <Row>
                <Col span={1}></Col>
                <Col span={8}>
                    <p className="banner-text">
                        {movieDetail.synopsis}
                        {/* A World War II satire that follows a lonely German boy 
                        named Jojo (Roman Griffin Davis) whose world view is turned 
                        upside down when he discovers his single mother (Scarlett Johansson) 
                        is hiding a young Jewish girl (Thomasin McKenzie) in their attic. 
                        Aided only by his idiotic imaginary friend, Adolf Hitler (Taika Waititi), 
                        Jojo must confront his blind nationalism.  */}
                    </p>
                </Col>
            </Row>
            <Row>
                <Col span={1}></Col>
                <Col> 
                    <Button onClick={() => setVisible(true)} className="banner-btn btn-trailer" size="large"><CaretRightOutlined/>Trailer</Button>
                </Col>
                <Col> 
                    <Button className="banner-btn btn-watchlist" size="large"><PlusOutlined/>Watchlist</Button>
                </Col>
            </Row>
        </div>
    )
}

export default MovieBanner;