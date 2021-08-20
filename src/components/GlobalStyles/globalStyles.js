import { createGlobalStyle} from 'styled-components';
export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        transition: all 0.5s linear;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 17px;
        letter-spacing: 0.01em;
        overflow-x: hidden;
    }
    .headerBlock {
        position: relative;
        background: ${({ theme }) => theme.headerBlockBg};
        box-shadow: ${({ theme }) => theme.headerBlockShadow};
        border-radius: 30px;
        padding-top: 25px;
    }
    .header .navbar {
        padding: 19px 53px;
    }
    .headerLogoOne {
        display: ${({ theme }) => theme.headerLogoOneDisplay};
    }
    .headerLogoTwo {
        display: ${({ theme }) => theme.headerLogoTwoDisplay};
        filter: ${({ theme }) => theme.headerLogoTwoFilter};
    }
    .headerLogoThree {
        display: ${({ theme }) => theme.headerLogoThreeDisplay};
    }
    nav.headerNavActive {
        background: ${({ theme }) => theme.headerNavActiveBg};
        box-shadow: ${({ theme }) => theme.headerNavActiveShadow};
    }
    #header .navbar-expand-lg .navbar-nav .nav-link {
        border: 1px solid transparent;
        border-radius: 30px;
        padding: 1px 18px 2px;
        font-weight: ${({ theme }) => theme.headerNavFontWeight};
        font-size: 16px;
        color: ${({ theme }) => theme.headerNavColor};
        cursor: pointer;
    }
    #header .navbar-expand-lg .navbar-nav .nav-link:hover {
        border-color: ${({ theme }) => theme.headerNavColor};
    }
    #header .navbar-expand-lg .navbar-nav .nav-link:active {
        opacity: 0.5;
    }
    #header .navbar-expand-lg .navbar-nav .nav-link.active {
        border-color: ${({ theme }) => theme.headerNavColor};
    }
    .headerEllipse {
        position: absolute;
        border-radius: 50%;
    }
    .headerEllipse_grey {
        top: 58px;
        left: -237px;
        width: 206px;
        height: 206px;
        background: ${({ theme }) => theme.headerBlockEllipseBg};
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.16);
    }
    .headerEllipse_red {
        top: -17px;
        left: -186px;
        width: 227px;
        height: 227px;
        background: ${({ theme }) => theme.headerBlockEllipseBigBg};
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
    }
    .headerDecor {
        width: 126px;
        height: 210px;
        background: ${({ theme }) => theme.headerBlockDecor};
    }
    .headerBtn {
        font-weight: bold;
        font-size: 14px;
        width: 205px;
        padding: 14px 0 12px;
        background: ${({ theme }) => theme.headerBtn};
        box-shadow: ${({ theme }) => theme.headerBtnShadow};
        transition: all 0.5s ease;
    }
    .headerBtn:hover {
        box-shadow: ${({ theme }) => theme.headerBtnHoverShadow};
    }
    .headerBtn:active {
        box-shadow: none;
    }
    #header2 nav {
        box-shadow: ${({ theme }) => theme.headerTwoNavShadow};
    }
    #header2 .navbar-expand-lg .navbar-nav .nav-link {
        border: 1px solid transparent;
        border-radius: 30px;
        padding: 1px 18px 2px;
        font-weight: 600;
        font-size: 16px;
        cursor: pointer;
    } 
    #header2 .navbar-expand-lg .navbar-nav .nav-link:hover {
        border-color: #ffffff;
    } 
    #header2 .navbar-expand-lg .navbar-nav .nav-link:active {
        opacity: 0.5;
    }
    #header2 nav {
        background: ${({ theme }) => theme.headerTwoNavBg};
        border-radius: 80px;
    } 
    #header2 nav.active {
        border-radius: 0;
    }
    .toggle {
        position: relative;
        width: 68px;
        height: 28px;
        border-radius: 30px;
        background: #BF3434;
        box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
        margin-left: 69px;
        cursor: pointer;
    }
    .toggle-circle {
        position: absolute;
        top: -6px;
        left: -6px;
        text-align: center;
        line-height: 40px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: ${({ theme }) => theme.toggleCircleBg};
        font-weight: ${({ theme }) => theme.toggleCircleWeight};
        font-size: 14px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    .toggle-circle-dark {
        top: -6px;
        right: -6px;
        left: auto;
    } 
    .toggle-circle:hover {
        box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.25);
    }
    .toggle-circle:active {
        box-shadow: none;
    }
    .widgets {
        position: fixed;
        right: 60px;
        bottom: 60px;
    }
    .widgets a {
        width: 60px;
        height: 60px;
        background: ${({ theme }) => theme.widgetsBg};
        box-shadow: ${({ theme }) => theme.widgetsShadow};
        opacity: 1;
    }
    .widgets a:after {
        content: '';
        display: block;
        position: absolute;
        width: 70px;
        height: 70px;
        border: ${({ theme }) => theme.widgetsBorder};
        border-radius: 50%;
        top: -5px;
        left: -5px;
    }
    .widgets a:nth-child(2) img {
        padding-bottom: 2px;
    }
    .widgets a img {
        opacity: ${({ theme }) => theme.widgetsImgOpacity};
    }
    .widgets a:hover {
        background: ${({ theme }) => theme.widgetsHoverBg};
    }
    .homeBorder {
        background: ${({ theme }) => theme.homeBorder};
        width: 100%;
        height: 300px;
    }
    .contacts-block {
        background: ${({ theme }) => theme.contactsBlockBg};
        box-shadow: ${({ theme }) => theme.contactsBlockShadow};
    }
    .contacts-block a {
        color: ${({ theme }) => theme.contactsBlockColor};
    }
    .directions {
        padding: 51px 0 29px;
        background: ${({ theme }) => theme.directionsBg};
        box-shadow: ${({ theme }) => theme.directionsShadow};
    }
    .directions.directionsPage {
        padding: 75px 0;
        background: ${({ theme }) => theme.directionsPageBg};
        box-shadow: ${({ theme }) => theme.directionsPageShadow};
    }
    .directionsGeometricFigure {
        display: ${({ theme }) => theme.directionsGeometricFigure};
    }
    .directionsGeometricFigureDark {
        display: ${({ theme }) => theme.directionsGeometricFigureDark};
    }
    .directionsBtn {
        background: ${({ theme }) => theme.directionsBtn};
    }
    .directionsLinkTest {
        color: ${({ theme }) => theme.directionsLinkTestColor};
        font-weight: ${({ theme }) => theme.directionsLinkTestWeight};
    }
    .directionsLinkTest:hover {
        color: #BE2F2F;
    }
    .directionsLinkTest:active {
        opacity: 0.5;
    }
    .footer {
        background: ${({ theme }) => theme.footerBg};
    }
    .itKidsBlock {
        background: ${({ theme }) => theme.itKidsBlockBg};
    }
    .trainingProgramBlock {
        background: ${({ theme }) => theme.trainingProgramBlockBg};
    }
    .diploma span {
        color: ${({ theme }) => theme.diplomaSpanColor};
    }
    .priceWebDevCard {
        background: ${({ theme }) => theme.priceWebDevCardBg};
    }
    .priceWebDevAcceleratedImg {
        display: ${({ theme }) => theme.priceWebDevAcceleratedImg};
    }
    .priceWebDevAcceleratedImgDark {
        display: ${({ theme }) => theme.priceWebDevAcceleratedImgDark};
    }
    .coursWrapper {
        padding: 80px 0;
    }
    .cours{
        text-align: left;
        padding: 80px 0;
    }
    /* ------- Media Queries ------- */
    /* 991-1199px */
    @media screen and (max-width: 1199px) {
        .toggle {
            margin-left: 28px;
        }
        .homeBorder {
            height: 250px;
        }
        .directions.directionsPage {
            padding: 130px 0 75px;
        }
        .coursWrapper {
            padding-top: 130px;
        }
        .cours{
            padding-top: 130px;
        }
    }
    /* 767-991px */
    @media screen and (max-width: 991px) {
        .headerBlock {
            background: none;
            box-shadow: none;
            border-radius: 0;
            padding-top: 0;
        }
        .headerLogoOne {
            display: none;
        }
        .headerLogoTwo {
            display: block;
            filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        }
        #header .navbar {
            padding: 7px 0;
            background: ${({ theme }) => theme.headerNavbarBg};
            box-shadow: ${({ theme }) => theme.headerNavbarShadow};
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1;
        }
        #header .navbar-expand-lg .navbar-nav .nav-link {
            color: #ffffff;
        }
        #header .navbar-expand-lg .navbar-nav .nav-link:hover {
            border-color: #ffffff;
        }
        #header .navbar-expand-lg .navbar-nav .nav-link:active {
            opacity: 0.5;
        }
        #header .navbar-expand-lg .navbar-nav .nav-link.active {
            border-color: #ffffff;
        }
        .toggle {
            margin-left: auto;
            margin-right: 30px;
        }
        .homeBorder {
            height: 180px;
        }
        .contacts-block {
            box-shadow: none;
            background: none;
        }
    }
    /* 575-767px */
    @media screen and (max-width: 767px) {
        .homeBorder {
            height: 135px;
        }
        .directions.directionsPage {
            padding-top: 100px;
        }
        .coursWrapper {
            padding-top: 100px;
        }
        .cours{
            padding-top: 100px;
        }
    }
    /* 320-575px */
    @media screen and (max-width: 575px) {
        #header .navbar {
            padding: 5px 0;
        }
        .headerLogoTwo {
            display: none;
        }
        .headerLogoThree {
            display: block;
        }
        #header .navbar .container {
            padding-right: 15px;
            padding-left: 15px;
        }
        .toggle {
            width: 60px;
            height: 26px;
            margin-right: 25px;
        }
        .toggle-circle {
            top: -4px;
            left: -4px;
            line-height: 34px;
            width: 34px;
            height: 34px;
            font-size: 12px;
        }
        .toggle-circle-dark {
            left: auto;
            right: -4px;
        }
        .headerBtn {
            width: 177px;
        }
        .widgets {
            right: 15px;
            bottom: 10px;
        }
        .widgets a {
            width: 55px;
            height: 55px;
        }
        .widgets a:after {
            width: 66px;
            height: 66px;
            top: -5px;
            left: -5px;
        }
        .homeBorder {
            height: 80px;
        }
        .directions.directionsPage {
            padding-bottom: 35px;
        }
    }
`