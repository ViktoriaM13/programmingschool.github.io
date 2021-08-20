import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll';
import $ from "jquery";
import header2 from './Header2.module.css';
import logoWhite from '../../img/logo-white.svg';
import logoSmallWhite from '../../img/logo-small-white.svg';
import Toggle from '../Toggler/Toggler';
import { GlobalStyles } from '../GlobalStyles/globalStyles';
import { darkTheme, lightTheme } from '../Theme/Themes';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from '../useDarkMode/useDarkMode';

$(function(){
    $(window).on('scroll resize',function(){
        let widthWindow = $(document).width();
		let pixelTop = $(window).scrollTop();

		if ((pixelTop > $('#header2').innerHeight()) && (widthWindow > 991)) {
			$('#header2 nav').addClass(`fixed-top active`);
		} else if ((pixelTop < $('#header2').innerHeight())  && (widthWindow > 991)) {
			$('#header2 nav').removeClass(`fixed-top active`);
		}
	})

    if ($(document).width() > 991) {
        $('#navbarNav').addClass(`animate__animated animate__fadeInDown`);
    } else if ($(document).width() > 991) {
        $('#navbarNav').removeClass(`animate__animated animate__fadeInDown`);
    }
})

const Header2 = () => {
    const [theme, themeToggler, mountedComponent] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    if(!mountedComponent) return <div/>

    return (
        <ThemeProvider theme={themeMode}>
        <>
        <GlobalStyles/>
        <header className={`${header2.header} header`} id="header2">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container p-xl-0">
                        <Link 
                            to = "header2"
                            spy={true}
                            smooth = {true}
                            duration = {1000}
                            className="navbar-brand text-dark d-block p-0 m-0 animate__animated animate__fadeInDown"
                        >
                            <img src={logoWhite} alt="Высшая Школа Программирования" className={`d-none d-sm-block ${header2.logo}`}/>
                            <img src={logoSmallWhite} alt="Высшая Школа Программирования" className="d-block d-sm-none"/>
                        </Link>
                        <button className="navbar-toggler order-1 order-lg-0 animate__animated animate__fadeInRight" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end order-1 order-lg-0" id="navbarNav">
                            <ul className="navbar-nav pt-2 pt-lg-0 align-items-start">
                                <li className="nav-item">
                                    <NavLink
                                        to="/"
                                        className="nav-link text-white"
                                        exact
                                    >
                                        Главная
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        to="/about"
                                        className="nav-link text-white"
                                    >
                                        О нас
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        to="/directions"
                                        className="nav-link text-white"
                                    >
                                        Направления
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        to="/reviews"
                                        className="nav-link text-white"
                                    >
                                        Отзывы
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        to="/contacts"
                                        className="nav-link text-white"
                                    >
                                        Контакты
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <Toggle
                            theme={theme} toggleTheme={themeToggler}
                        />
                    </div>
                </nav>
            </div>
        </header>
        </>
        </ThemeProvider>
    )
}

export default Header2;