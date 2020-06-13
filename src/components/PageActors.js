import React, {useEffect} from "react";
import "../assets/css/pageoverview.scss";
import {Link} from "react-router-dom";
import {
    Row, 
    Col, 
    Card
} from "antd";
import "../../node_modules/antd/dist/antd.css"
import MovieBanner from "../components/MovieBanner"
// import {getMovies} from "../stores/actions/movies"
import { useDispatch, useSelector } from "react-redux";


const PageActors = () => {
    // const dispatch = useDispatch()
    
    // const movieImage = useSelector(state => state.movieImage.photo)

    // useEffect(() => {
    //     dispatch(getMovies())
    // }, [getMovies])

    const Meta= Card;
    return(
        <div>
            <MovieBanner/>
             <Row>
                <Col span={1}></Col>
                <Col span={4}><Link to="/overview">Overview</Link></Col>
                <Col span={4}><Link to="/actors">Actors</Link></Col>
                <Col span={4}><Link to="/reviews">Reviews</Link></Col>
            </Row>
            {/* <Row>
                {movieImage.map(item =>
                    <Col span={4}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={item.url} />}>
                            <Meta title={item.id} description={item.title} />
                        </Card>
                    </Col>
                )}
            </Row> */}
        </div>
    )
}

export default PageActors;