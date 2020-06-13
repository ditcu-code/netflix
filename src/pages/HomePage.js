import React from 'react'
import Header from '../layout/Header'
import Slider from '../components/Slider'
import MovieCards from '../components/MovieCards'
import Footer from '../layout/Footer'

const HomePage = () => {
    return (
        <div>
            <Header/>
            <Slider/>
            <MovieCards/>
            <Footer/>
        </div>
    )
}

export default HomePage