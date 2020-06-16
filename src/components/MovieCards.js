import React, { useState, useEffect} from "react";
import { Card, Pagination, Col, Tabs, Row } from 'antd';
import '../assets/css/slider.scss'
import { movieList, getGenres, getMoviesByGenre } from '../stores/actions/movies';
import { useDispatch, useSelector } from "react-redux";
import '../assets/css/movieCards.scss'
import Title from "antd/lib/typography/Title";
import { TagsOutlined } from "@ant-design/icons";
import {useParams, Link} from "react-router-dom";
const { Meta } = Card;
const { TabPane } = Tabs;

const MovieCards = () => {
    const genres = useSelector(state => state.movies.genres)
    const movies = useSelector(state => state.movies.movies)
    const moviebygenre = useSelector(state => state.movies.moviebygenre)
    const dispatch = useDispatch()
    const [genreId, setgenreId] = useState(28); useParams()
    // let {id} = useParams()
    
    useEffect(() => {
      if (movies.length <= 0 || genres.length === undefined) {
        // console.log('semuanya kosong')
        dispatch(movieList())
        dispatch(getGenres())
      }
      if (moviebygenre.length <= 0) {
        dispatch(getMoviesByGenre(genreId))
      }
      })

    // const handleChange = item => {
    //     if (item <= 1) {
    //       setPage({
    //         minValue: 0,
    //         maxValue: 6
    //       });
    //     } else {
    //       setPage({
    //         minValue: page.maxValue,
    //         maxValue: item * 6
    //       });
    //     }
    //   };

    const callback = (key) => {
      setgenreId(key)
      dispatch(getMoviesByGenre(key))
    }

    const callmovie = (key) => {
      console.log('key',key)
      // setPage(key)
      dispatch(movieList(key))
    }

    // console.log('KEYS', genreId, moviebygenre.length)

    const movieItem = movies.map(item => 
          <Link to={`/overview/${item.id}`} key={item.id} >
            <Card
                hoverable
                cover={<img alt={item.title} src={item.Images[1].url} />}
                >
                <Meta title={item.title} description={item.releaseDate!=null ? item.releaseDate.slice(0,4) : "2010"} />
            </Card>
          </Link>
    );

    const moviebygenreItem = moviebygenre.map(item => 
      <Link to={`/overview/${item.id}`} key={item.id} >
        <Card
            hoverable
            cover={<img alt={item.title} src={item.Images[1].url} />}
        >
          <Meta title={item.title} description={item.releaseDate!=null ? item.releaseDate.slice(0,4) : "2010"} />
        </Card>
      </Link>
    );


    // console.log('genres', moviebygenre)

    // console.log('movies', movies)

    const genreItem = genres.map(item =>
      <TabPane tab={item.name} key={item.id} >
      </TabPane>
    );

    return (
      <div>
        <Col className='movieCards-wrapper'>
          <Col span={24} className='movieCards' >
              {movieItem}
          </Col>
          <Col span={24} className='moviePagination' >
              <Pagination onChange={callmovie} defaultCurrent={1} total={50} defaultPageSize={10} />
          </Col>
          <Row className='movieGenres'>
            <Col span={5}>
              <Title><TagsOutlined /> Genres</Title>
            </Col>
            <Col span={19}>
              <Tabs defaultActiveKey='1' onChange={callback} tabBarGutter={40}>
              {genreItem}
              </Tabs>
            </Col>
          </Row>
          <Col span={24} className='movieCards' >
            {moviebygenreItem}
          </Col>
        </Col>
      </div>
    )
}

export default MovieCards
