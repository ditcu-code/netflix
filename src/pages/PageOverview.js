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

    useEffect(() => {
        if (IdChange === false) { //aku bikin ini biar ga looping
            dispatch(getMovieById(id)) //id nya bonceng dispatch 
            setIdChange(!!setIdChange)
        }
        }, [IdChange, dispatch, id])

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
                                {/* In the waning months of the Third Reich, the unpopular ten-year-old German boy, 
                                Johannes "Jojo" Betzler, can't wait to join the ranks of the Nazi Party's youth 
                                organisation, during an intense training weekend that guarantees to separate the men 
                                from the boys. Massively into swastikas and ready to give up his life for his megalomaniac 
                                idol, Adolf Hitler, instead, the Führer's tiny number one fan gets kicked out of 
                                the Hitler Youth after a disastrous first assignment in front of his peers--an ignominious 
                                defeat that earns Jojo an equally degrading nickname. Now, with nothing but time on his hands, 
                                Johannes is in for a rude awakening when he accidentally unearths his progressive mother's 
                                well-hidden secret and comes face-to-face with a shocking new reality so much different from the 
                                hypnotic indoctrinations he's absorbed. But, does everything happen for a reason? 
                                Are the others always the enemy? In a mad world, devoured by fear and prejudice, 
                                is youthful innocence humankind's redemption? */}
                                </p>
                            </Col>
                            <div>
                                <Divider orientation="left" className="content-divider">Movie Info</Divider>
                                <p className="content-text">
                                    <strong>Director:</strong> Taika Waititi<br/>
                                    <strong>Writers:</strong> Taika Waititi (screenplay by), Christine Leunens (novel)<br/>
                                    <strong>Casts:</strong> Roman Griffin Davis, Thomasin McKenzie, Scarlett Johansson<br/>
                                    <strong>Release date:</strong> October18, 2019 <br/>
                                    <strong>Production company:</strong> Fox Searchlight Pictures
                                </p>
                            </div>
                        </TabPane>
                        <TabPane tab='Cast' key='2'>
                            <PageActors/>
                        </TabPane>
                        <TabPane tab='Reviews' key='3'>
                            <h1>isi sendiri :p</h1>
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