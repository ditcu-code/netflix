import React, { useState, useEffect } from "react";
import { Card, Pagination, Col } from 'antd';
import '../assets/css/slider.scss'
import { movieList } from '../stores/actions/movies';
import { useDispatch, useSelector } from "react-redux";
import '../assets/css/movieCards.scss'
const { Meta } = Card;

const MovieCards = () => {
    
    const movies = useSelector(state => state.movies.movies)
    const dispatch = useDispatch()
    const [page, setPage] = useState(
        {
        minValue: 0,
        maxValue: 6
        }
    );
    
    useEffect(() => {
        dispatch(movieList())
      }, [])


    const handleChange = item => {
        if (item <= 1) {
          setPage({
            minValue: 0,
            maxValue: 6
          });
        } else {
          setPage({
            minValue: page.maxValue,
            maxValue: item * 6
          });
        }
      };

    const movieItem = movies.slice(page.minValue, page.maxValue).map(item => 
            <Card
                key={item._id}
                hoverable
                cover={<img alt={item.title} src={item.poster} />}
            >
                <Meta title={item.title} description={item.title} />
            </Card>
    );

    return (
        <div>
            <div className='movieCards' >
                {movieItem}
            </div>
            <Col span={24} className='moviePagination' >
                <Pagination defaultCurrent={1} total={24} defaultPageSize={6} onChange={handleChange}/>
            </Col>
        </div>
    )
}

export default MovieCards
