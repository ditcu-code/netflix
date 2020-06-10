import React from 'react'
import Slider from '../components/Slider'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import LoginForm from '../components/LoginForm'

const HomePage = () => {
    return (
        <div>
            <Header/>
            <Slider/>
            <LoginForm/>
            <Footer/>
        </div>
    )
}

export default HomePage