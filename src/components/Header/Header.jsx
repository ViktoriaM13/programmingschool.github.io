import React, { useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import $ from "jquery";
import header from './Header.module.css';
import logo from '../../img/logo.png';
import logoWhite from '../../img/logo-white.svg';
import logoSmallWhite from '../../img/logo-small-white.svg';
import firstImg from '../../img/first-img.png';
import Parallax from 'parallax-js';
import Toggle from '../Toggler/Toggler';
import { GlobalStyles } from '../GlobalStyles/globalStyles';
import { darkTheme, lightTheme } from '../Theme/Themes';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from '../useDarkMode/useDarkMode';

$(function(){
    $(window).on('scroll resize',function(){
        let widthWindow = $(document).width();
		let pixelTop = $(window).scrollTop();

		if ((pixelTop > $('#header').innerHeight()) && (widthWindow > 991)) {
			$('#header nav').addClass(`fixed-top headerNavActive`);
		} else if ((pixelTop < $('#header').innerHeight())  && (widthWindow > 991)) {
			$('#header nav').removeClass(`fixed-top headerNavActive`);
		}
	})

    if ($(document).width() > 991) {
        $('#navbarNav').addClass(`animate__animated animate__fadeInDown`);
    } else if ($(document).width() > 991) {
        $('#navbarNav').removeClass(`animate__animated animate__fadeInDown`);
    }
})

const parallaxShow = () => {
    if($('#scene')[0]) {
        if($(document).width() > 1199) {
            let scene = $('#scene').get(0);
            let parallaxInstance = new Parallax(scene, {
                relativeInput: true
            });

            let sceneDots = $('#scene-dots').get(0);
            let parallaxInstance2 = new Parallax(sceneDots);
        }
    }
}

const Header = (props) => {

    const [theme, themeToggler, mountedComponent] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    let getNavHeight = () => {
        let result;
        if ($(document).width() > 991) {
            result = 71
        } else if ($(document).width() > 767 && $(document).width() < 992) {
            result = 54
        } else if ($(document).width() > 575 && $(document).width() < 768) {
            result = 54
        } else if ($(document).width() && $(document).width() < 768) {
            result = 54
        }
        return -result;
    }
    useEffect(() => {
        parallaxShow();
    })

    if(!mountedComponent) return <div/>

    return (
        <ThemeProvider theme={themeMode}>
        <>
        <GlobalStyles/>
        <header className={`${header.header} header d-flex align-items-center justify-content-center position-relative flex-column`} id="header">
            <div className="container">
                <div className={`headerBlock position-relative`}>
                    <div id="scene" className="d-none d-lg-block">
                        <div data-depth="0.4">
                            <div className={`headerEllipse headerEllipse_grey`}></div>
                        </div>
                        <div data-depth="0.1">
                            <div className={`headerEllipse headerEllipse_red`}></div>
                        </div>
                    </div>
                    <div id="scene-dots" className={`${header.sceneDots} d-none d-xl-block`}>
                        <div data-depth="0.7">
                            <div className={`headerDecor`}></div>
                        </div>
                    </div>
                    <nav className="navbar navbar-expand-lg navbar-dark">
                        <div className="container p-lg-0">
                            <Link 
                                to = "header"
                                spy={true}
                                smooth = {true}
                                duration = {1000}
                                className="navbar-brand text-dark d-block p-0 m-0 animate__animated animate__fadeInDown"
                            >
                                <img src={logo} alt="Высшая Школа Программирования" className="headerLogoOne"/>
                                <img src={logoWhite} alt="Высшая Школа Программирования" className="headerLogoTwo"/>
                                <img src={logoSmallWhite} alt="Высшая Школа Программирования" className="headerLogoThree"/>
                            </Link>
                            <button className="navbar-toggler order-1 order-lg-0 animate__animated animate__fadeInRight" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-end order-1 order-lg-0" id="navbarNav">
                                <ul className="navbar-nav pt-2 pt-lg-0 align-items-start">
                                    <li className="nav-item">
                                        <Link 
                                            activeClass="active"
                                            to="about"
                                            spy={true}
                                            smooth={true}
                                            duration={1000}
                                            className="nav-link"
                                            offset={getNavHeight()}
                                        >
                                            О нас
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link 
                                            activeClass="active"
                                            to="directions"
                                            spy={true}
                                            smooth={true}
                                            duration={1000}
                                            className="nav-link"
                                            offset={getNavHeight()}
                                        >
                                            Направления
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link 
                                            activeClass="active"
                                            to="reviews"
                                            spy={true}
                                            smooth={true}
                                            duration={1000}
                                            className="nav-link"
                                            offset={getNavHeight()}
                                        >
                                            Отзывы
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link 
                                            activeClass="active"
                                            to="contacts"
                                            spy={true}
                                            smooth={true}
                                            duration={1000}
                                            className="nav-link"
                                            offset={getNavHeight()}
                                        >
                                            Контакты
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <Toggle
                                theme={theme} toggleTheme={themeToggler}
                            />
                        </div>
                    </nav>
                    <div className={`${header.wrapper} d-md-flex justify-content-md-between align-items-md-center`}>
                        <div className={`${header.offer}`}>
                            <h1 className="m-0 animate__animated animate__fadeInLeft">
                                Профессионально обучим направлениям в сфере <br className="d-sm-block d-md-none d-lg-block"/>IT-технологий
                            </h1>
                            <img src={firstImg} alt="картинка" className={`${header.img} d-block d-md-none animate__animated animate__fadeInRight`}/>
                            <p className={`${header.text} animate__animated animate__fadeInLeftBig`}>
                                Хотите стать своим в мире алгоритмов и кодов?<br/>Тогда Вы обратились по адресу!
                            </p>
                            <Link 
                                to = "about"
                                spy={true}
                                smooth = {true}
                                duration = {1000}
                                className={`headerBtn btn badge-pill text-white border-0 animate__animated animate__bounceIn animate__delay-1s`}
                                offset={getNavHeight()}
                            >
                                Узнать больше
                            </Link>
                        </div>
                        <img src={firstImg} alt="картинка" className={`${header.img} d-none d-md-block animate__animated animate__fadeInRight`}/>
                    </div>
                </div>
            </div>
        </header>
        </>
    </ThemeProvider>
    )
}

export default Header;