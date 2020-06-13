import React, { useState, useEffect, useCallback } from "react";
import { Card, Pagination, Col, Tabs } from 'antd';
import '../assets/css/slider.scss'
import { movieList } from '../stores/actions/movies';
import { useDispatch, useSelector } from "react-redux";
import '../assets/css/movieCards.scss'
const { Meta } = Card;
const { TabPane } = Tabs;

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
      })


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

    const callback = (key) => {
      console.log(key)
    }

    const movieItem = movies.map(item => 
            <Card
                key={item._id}
                hoverable
                cover={<img alt={item.title} src={item.Images[0].url} />}
            >
                <Meta title={item.title} description={item.releaseDate.slice(0,4)} />
            </Card>
    );

    return (
        <div>
          <div className='movieGenres'>
            <Tabs defaultActiveKey="1" onChange={callback} tabBarGutter={50}>
              <TabPane tab="Action" key="1">
                Content of Tab Pane 1
              </TabPane>
              <TabPane tab="Thriller" key="2">
                Content of Tab Pane 2
              </TabPane>
              <TabPane tab="Sci-fi" key="3">
                Content of Tab Pane 3
              </TabPane>
              <TabPane tab="Drama" key="4">
                Content of Tab Pane 4
              </TabPane>
            </Tabs>
          </div>
          <Col span={24} className='movieCards' >
              {movieItem}
          </Col>
          <Col span={24} className='moviePagination' >
              <Pagination defaultCurrent={1} total={24} defaultPageSize={6} onChange={handleChange}/>
          </Col>
        </div>
    )
}

export default MovieCards
