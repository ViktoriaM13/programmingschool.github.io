import React from 'react';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';
import Directions from '../Directions/Directions';
import Features from '../Features/Features';
import Header from '../Header/Header';
import Reviews from '../Reviews/Reviews';
import home from './Home.module.css';

const Home = (props) => {
    return (
        <div>
            <Header/>
            <div className={`homeBorder`}></div>
            <About/>
            <Features/>
            <Directions/>
            <Reviews/>
            <Contacts/>
        </div>
    )
}

export default Home;