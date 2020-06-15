import React, {useState ,useEffect} from "react";
import "../assets/css/pageoverview.scss";
import {useParams} from "react-router-dom";
import {
    Col, 
    Divider,
    Tabs,
} from "antd";
import "../../node_modules/antd/dist/antd.css"
import MovieBanner from "../components/MovieBanner"
import PageActors from '../components/PageActors'
import { getMovieById } from '../stores/actions/movies';
import { useSelector, useDispatch } from "react-redux";
import PageReview from "../components/PageReview";
const { TabPane } = Tabs;

const PageOverview = () => {
    const movieDetail = useSelector(state => state.movies.movieId)

    // const actorsDetail = useSelector(state => state.movies.actors)
    const [IdChange, setIdChange] = useState(false) //aku bikin ini biar ga looping
    const dispatch = useDispatch()
    let { id } = useParams() //ini buat nge get id dari url, ingat gunakan let karena dinamis, next cek line 27

    const callback = (key) => { //ini buat tabs berfungsi
        console.log(key)
    }

    // const casts = movieDetail.Actors.map(item =>
    // <p>Casts: {item.name}</p>)

    useEffect(() => {
        if (IdChange === false) { //aku bikin ini biar ga looping
            dispatch(getMovieById(id)) //id nya bonceng dispatch 
            setIdChange(!!setIdChange)
        }
        })

    // console.log(id, IdChange)

    return(
        <div>
            <MovieBanner/>
            <div className="content-wrapper">
                <Col span={24} className='overview-tabs' >
                    <Tabs defaultActiveKey='1' tabBarGutter={80} onChange={callback}>
                        <TabPane tab='Overview' key='1'>
                            <Col span={24}>
                                <Divider orientation="left" className="content-divider">Synopsis</Divider>
                                <p className="content-text">
                                    {movieDetail.synopsis}
                                </p>
                            </Col>
                            <div>
                                <Divider orientation="left" className="content-divider">Movie Info</Divider>
                                <p className="content-text">
                                    <strong>Release date:</strong> {movieDetail.releaseDate} <br/>
                                    <strong>Genres:</strong>
                                    <strong>Producer:</strong> Taika Waititi<br/>
                                    <strong>Casts:</strong> Roman Griffin Davis, Thomasin McKenzie, Scarlett Johansson<br/>
                                    {/* {casts} */}
                                </p>
                            </div>
                        </TabPane>
                        <TabPane tab='Cast' key='2'>
                            <PageActors/>
                        </TabPane>
                        <TabPane tab='Reviews' key='3'>
                            <PageReview/>
                        </TabPane>
                    </Tabs>
                </Col>
                {/* <Row>
                    <Col span={1}></Col>
                    <Col span={4}><Link to="/overview">Overview</Link></Col>
                    <Col span={4}><Link to="/actors">Actors</Link></Col>
                    <Col span={4}><Link to="/reviews">Reviews</Link></Col>
                </Row> */}
            </div>
        </div>
    )
}

export default PageOverview;