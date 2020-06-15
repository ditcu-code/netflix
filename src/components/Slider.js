import React from 'react'
import { Carousel } from 'antd';
import '../assets/css/slider.scss'

const Carou = () => {
    return (
        <div>
            <Carousel autoplay effect="fade" speed={2000} autoplaySpeed={5000} >
                <div>
                    <img className='carou-img' src={require('../assets/images/oblivion.jpg' )} alt='oblivion' ></img>
                </div>
                <div>
                    <img className='carou-img' src={require('../assets/images/kingdom.jpg' )} alt='kingdom' ></img>
                </div>
                <div>
                    <img className='carou-img' src={require('../assets/images/witcher.jpg' )} alt='witcher' ></img>
                </div>
                <div>
                    <img className='carou-img' src={require('../assets/images/1917.jpg' )} alt='1917' ></img>
                </div>
            </Carousel>
        </div> 
    )
} 

export default Carou 