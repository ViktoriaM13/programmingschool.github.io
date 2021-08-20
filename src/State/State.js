import Python from "../components/Courses/AllCourses/Python";
import Cplus from "../components/Courses/AllCourses/Cplus";
import Csharp from "../components/Courses/AllCourses/Csharp";
import Swift from '../components/Courses/AllCourses/Swift';
import Java from '../components/Courses/AllCourses/Java';
import PHP from '../components/Courses/AllCourses/PHP';
import JS from '../components/Courses/AllCourses/JS';
import HTML from '../components/Courses/AllCourses/HTML';
import OneC from '../components/Courses/AllCourses/1C';
import PO from '../components/Courses/AllCourses/PO';
import CSS from '../components/Courses/AllCourses/CSS';
import SEO from '../components/Courses/AllCourses/SEO';
import Unity from '../components/Courses/AllCourses/Unity';
import Cinema from '../components/Courses/AllCourses/Cinema';
import IS from '../components/Courses/AllCourses/IS'
import Sony from '../components/Courses/AllCourses/SonyVegas';
import Max from '../components/Courses/AllCourses/3DMax';
import CAD from '../components/Courses/AllCourses/AutoCad';
import Corel from '../components/Courses/AllCourses/CorelDraw';
import PS from '../components/Courses/AllCourses/PS';
import AI from '../components/Courses/AllCourses/AI';
import PP from '../components/Courses/AllCourses/PP';
import AE from '../components/Courses/AllCourses/AE';
import INDESIGN from "../components/Courses/AllCourses/INDESIGN";
import AWS from "../components/Courses/AllCourses/AWS";
import SQL from "../components/Courses/AllCourses/SQL";
import JQ from "../components/Courses/AllCourses/JQ";
import AJAX from "../components/Courses/AllCourses/AJAX";
import JOOMLA from "../components/Courses/AllCourses/JOOMLA";
import BITRIX from "../components/Courses/AllCourses/BITRIX";
import FLASH from "../components/Courses/AllCourses/FLASH";
import MB from "../components/Courses/AllCourses/Mobile";
import Linux from "../components/Courses/AllCourses/Linux";
import SA from "../components/Courses/AllCourses/SA";
import PC from "../components/Courses/AllCourses/PC";
import Font from "../components/Courses/AllCourses/Font";
import Hack from "../components/Courses/AllCourses/Hack";
import TB from "../components/Courses/AllCourses/TB";
import SERM from "../components/Courses/AllCourses/SERM";
import OC from "../components/Courses/AllCourses/OC";
import GD from "../components/Courses/AllCourses/GD";
import Exel from "../components/Courses/AllCourses/Exel";
import DS from "../components/Courses/AllCourses/DS";
import MExel from "../components/Courses/AllCourses/MExel";
import Haskell from "../components/Courses/AllCourses/Haskell";
import PM from "../components/Courses/AllCourses/PM";
import GUnity from "../components/Courses/AllCourses/GUnity";
//Images
import pythonicon from '../img/Python(2).svg';
import cplusicon from '../img/c++(1).svg';
import csharpicon from '../img/csharp(1).svg';
import swifticon from '../img/SWIFT(3).svg';
import javaicon from '../img/JAVA(4).svg';
import phpicon from '../img/PHP(1).svg';
import jsicon from '../img/JS(1).svg';
import htmlicon from '../img/HTML(2).svg';
import onecicon from '../img/1c(1).svg';
import poicon from '../img/ПО(2).svg';
import cssicon from '../img/CSS(1).svg';
import seoicon from '../img/SEO(2).svg';
import unityicon from '../img/Unity 3D(1).svg';
import cinemaicon from '../img/Cinema 4D(2).svg';
import sonyicon from '../img/Sony Vegas(1).svg';
import maxicon from '../img/3D MAX(1).svg';
import autocadicon from '../img/AUTO CAD(3).svg';
import cdicon from '../img/COREL DRAW(2).svg';
import psicon from '../img/PHOTOSHOP(1).svg';
import aiicon from '../img/ADOBE ILLUSTRATOR(5).svg';
import ppicon from '../img/PREMIERE PRO(5).svg';
import aeicon from '../img/After Effects(6).svg';
import indicon from '../img/INDESIGN(6).svg';
import sqlicon from '../img/SQL(3).svg';
import jqicon from '../img/JQUERY(3).svg';
import ajaxicon from '../img/AJAX(2).svg';
import joomlaicon from '../img/CMS JOOMLA(3).svg';
import bitrixicon from '../img/Bitrix(1).png';
import flashicon from '../img/Adobe Flash(4).svg';
import ocicon from '../img/CMS OpenCart(2).svg';
import gdicon from '../img/Game Dev  Геймдизайн(1).svg';
import sermicon from '../img/SERM(1).png';
import dsicon from '../img/Data Science(3).svg';
import exelicon from '../img/Макросы Excel(2).svg';
import haskelicon from '../img/Haskell(1).svg';
import mdicon from '../img/Разработка мобильных приложений(4).svg';
import asicon from '../img/АДМИНИСТРИРОВАНИЕ WINDOWS SERVER(4).svg';
import sicon from '../img/Технология создания компьютерных шрифтов(3).svg';
import saicon from '../img/Системное администрирование(3).svg';
import linuxicon from '../img/Администрирование Linux (Ubuntu)(3).svg';
import pcicon from '../img/Пользователь ПК(компьютер с нуля)(1).svg';
import isicon from '../img/Информационная безопасность(3).svg';
import tbicon from '../img/Разработка торговых ботов (биржакриптовалюта)(1).svg';
import hicon from '../img/Методики расследования хакерских инцидентов(2).svg';
import pmicon from '../img/Программирование микроконтроллеров(3).svg';

let objectState = {

    _state: {

        Courses:{
            CoursesData:[
                {id: 1, name:"Python", comp: Python, color: "progr-webs", link: "/Python", image: pythonicon},
                {id: 2, name:"C++", comp: Cplus, color: "progr", link: "/Cplus", image: cplusicon},
                {id: 3, name:"C#", comp: Csharp, color: "progr", link: "/Csharp", image: csharpicon},
                {id: 4, name:"Swift", comp: Swift, color: "progr", link: "/Swift", image: swifticon},
                {id: 5, name:"Java", comp: Java,  color: "progr", link: "/Java", image: javaicon},
                {id: 6, name:"PHP", comp: PHP, color: "webs", link: "/PHP", image: phpicon},
                {id: 7, name:"JS", comp: JS, color: "webs", link: "/JS", image: jsicon},
                {id: 8, name:"HTML", comp: HTML, color: "webs", link: "/HTML", image: htmlicon},
                {id: 9, name:"Тестировщик ПО", comp: PO, color: "adm", link: "/PO", image: poicon},
                {id: 10, name:"CSS", comp: CSS, color: "webs", link: "/CSS", image: cssicon},
                {id: 11, name:"SEO", comp: SEO, color: "webs", link: "/SEO", image: seoicon},
                {id: 12, name:"Unity 3D", comp: Unity, color: "progr", link: "/Unity", image: unityicon},
                {id: 13, name:"Cinema 4D", comp: Cinema, color: "des", link: "/Cinema", image: cinemaicon},
                {id: 14, name:"Sony Vegas", comp: Sony, color: "des", link: "/Sony", image: sonyicon},
                {id: 15, name:"3D Max", comp: Max, color: "des", link: "/3DMax", image: maxicon},
                {id: 16, name:"Auto Cad", comp: CAD, color: "des", link: "/AutoCad", image: autocadicon},
                {id: 17, name:"Corel Draw", comp: Corel, color: "webs-des", link: "/ColerDraw", image: cdicon},
                {id: 18, name:"Photoshop", comp: PS, color: "webs-des", link: "/PS", image: psicon},
                {id: 19, name:"PREMIERE PRO", comp: PP, color: "des", link: "/PP", image: ppicon},
                {id: 20, name:"AFTER EFFECTS", comp: AE, color: "des", link: "/AE", image: aeicon},
                {id: 21, name:"INDESIGN", comp: INDESIGN, color: "des", link: "/INDESIGN", image: indicon},
                {id: 22, name:"SQL", comp: SQL, color: "progr-webs", link: "/SQL", image: sqlicon},
                {id: 23, name:"JQuery", comp: JQ, color: "webs", link: "/JQ", image: jqicon},
                {id: 24, name:"AJAX", comp: AJAX, color: "webs", link: "/AJAX", image: ajaxicon},
                {id: 25, name:"CMS Joomla", comp: JOOMLA, color: "webs", link: "/JOOMLA", image: joomlaicon},
                {id: 26, name:"1C | БИТРИКС", comp: BITRIX, color: "webs", link: "/BITRIX", image: bitrixicon},
                {id: 27, name:"Flash", comp: FLASH, color: "webs-des", link: "/FLASH", image: flashicon},
                {id: 28, name:"CMS OpenCart", comp: OC, color:"webs", link: "/OC", image: ocicon},
                {id: 29, name:"SERM", comp: SERM, color:"adm", link: "/SERM", image: sermicon},
                {id: 30, name:"Data Science", comp: DS, color:"progr", link: "/DS", image: dsicon},
                {id: 31, name:"Макросы в Excel", comp: MExel, color:"all-courses", link: "/MExel", image: exelicon},
                {id: 32, name:"Haskell", comp: Haskell, color:"progr", link: "/Haskell", image: haskelicon},
                {id: 33, name:"1С Программирование", comp: OneC, color: "progr", link: "/OneC", image: onecicon},
                {id: 34, name:"ADOBE ILLUSTRATOR", comp: AI, color: "webs-des", link: "/AI", image: aiicon},
                {id: 35, name:"Game Dev / Геймдизайн", comp: GD, color:"progr", link: "/GD", image: gdicon},
                {id: 36, name:"Информационная Безопасность", comp: IS, color: "adm", link: "/IS", image: isicon},
                {id: 37, name:"Программирование микроконтроллеров", comp: PM, color:"adm", link: "/PM", image: pmicon},
                {id: 38, name:"Системное Администрирование", comp: SA, color:"adm", link: "/SA", image: saicon},
                {id: 39, name:"Разработчик игр на UNITY", comp: GUnity, color:"progr", link: "/GUnity", image: unityicon},
                {id: 40, name:"Администрирование Linux (Ubuntu)", comp: Linux, color:"adm", link: "/Linux", image: linuxicon},
                {id: 41, name:"Администрирование Windows Server", comp: AWS, color: "adm", link: "/AWS", image: asicon},
                {id: 42, name:"Базовый курс по работе с Microsoft Office Excel", comp: Exel, color:"all-courses", link: "/Exel", image: exelicon},
                {id: 43, name:"Разработка Мобильных Приложений Android", comp: MB, color:"progr-webs", link: "/MB", image: mdicon},
                {id: 44, name:"Технология создания компьютерных шрифтов", comp: Font, color:"des", link: "/Font", image: sicon},
                {id: 45, name:"Разработка торговых ботов (биржа/криптовалюта)", comp: TB, color:"progr", link: "/TB", image: tbicon},
                {id: 46, name:"Методики расследования хакерских инцидентов", comp: Hack, color:"adm", link: "/Hack", image: hicon},
                {id: 47, name:"Пользователь ПК (компьютер с нуля)", comp: PC, color:"all-courses", link: "/PC", image: pcicon},
                ]
            },
    },
    getState() {
        return this._state
    },

    _renderTree(){

    },

    subServer(observer) {

    this._renderTree = observer;

    }
}

window.objectState = objectState;

export default objectState;
