import React, { Component } from "react";
import $ from "jquery";
import { NavLink } from 'react-router-dom';
import testModuleStyle from './Test.module.css';

class Test extends Component {
    componentDidMount() {
        $('.start-test').click(function(){
            $('.test').show();
            $('.first-qst').show();
            $('.start-test').hide();
            $('.prog-word').append("01");
            $('.start-bg').hide();
            $('.h2-start').hide();
           
        })
        let mass = [];

    $('.btn-1').click(function(){
        if($('input[id="radio1"]:checked').val()){
            mass.push(4);
        }if($('input[id="radio2"]:checked').val()){
            mass.push(2);
        }if($('input[id="radio3"]:checked').val()){
            mass.push(3);
        }if($('input[id="radio4"]:checked').val()){
            mass.push(1);
        }
            $('.first-qst').hide();
            $('.second-qst').show();
            $('.prog-el').width("50px");
            $('.prog-word').empty();
            $('.prog-word').append("02");
        
    });
        //
    $('.btn-2').click(function(){
        if($('input[id="radio5"]:checked').val()){
            mass.push(2);
        }if($('input[id="radio6"]:checked').val()){
            mass.push(3);
        }if($('input[id="radio7"]:checked').val()){
            mass.push(4);
        }if($('input[id="radio8"]:checked').val()){
            mass.push(1);
        }
            $('.second-qst').hide();
            $('.third-qst').show();
            $('.prog-el').width("100px");
            $('.prog-word').empty();
            $('.prog-word').append("03");
    });
        //
    $('.btn-3').click(function(){
        if($('input[id="radio9"]:checked').val()){
            mass.push(2);
        }if($('input[id="radio10"]:checked').val()){
            mass.push(3);
        }if($('input[id="radio11"]:checked').val()){
            mass.push(4);
        }if($('input[id="radio12"]:checked').val()){
            mass.push(1);
        }
            $('.third-qst').hide();
            $('.fourth-qst').show();
            $('.prog-el').width("150px");
            $('.prog-word').empty();
            $('.prog-word').append("04");
    });
        //
    $('.btn-4').click(function(){
        if($('input[id="radio13"]:checked').val()){
            mass.push(2);
        }if($('input[id="radio14"]:checked').val()){
            mass.push(4);
        }if($('input[id="radio15"]:checked').val()){
            mass.push(3);
        }if($('input[id="radio16"]:checked').val()){
            mass.push(1);
        }
            $('.fourth-qst').hide();
            $('.fifth-qst').show();
            $('.prog-el').width("200px");
            $('.prog-word').empty();
            $('.prog-word').append("05");
    });
        //
    $('.btn-5').click(function(){
        if($('input[id="radio17"]:checked').val()){
            mass.push(4);
        }if($('input[id="radio18"]:checked').val()){
            mass.push(3);
        }if($('input[id="radio19"]:checked').val()){
            mass.push(1);
        }if($('input[id="radio20"]:checked').val()){
            mass.push(2);
        }
            $('.fifth-qst').hide();
            $('.sixth-qst').show();
            $('.prog-el').width("250px");
            $('.prog-word').empty();
            $('.prog-word').append("06");

    });
        //
    $('.btn-6').click(function(){
        if($('input[id="radio21"]:checked').val()){
            mass.push(3);
        }if($('input[id="radio22"]:checked').val()){
            mass.push(4);
        }if($('input[id="radio23"]:checked').val()){
            mass.push(2);
        }if($('input[id="radio24"]:checked').val()){
            mass.push(1);
        }
            $('.sixth-qst').hide();
            $('.seventh-qst').show();
            $('.prog-el').width("300px");
            $('.prog-word').empty();
            $('.prog-word').append("07");
    });
        //
    $('.btn-7').click(function(){
        if($('input[id="radio25"]:checked').val()){
            mass.push(3);
        }if($('input[id="radio26"]:checked').val()){
            mass.push(2);
        }if($('input[id="radio27"]:checked').val()){
            mass.push(4);
        }if($('input[id="radio28"]:checked').val()){
            mass.push(1);
        }
            $('.seventh-qst').hide();
            $('.prog-el, .prog-bar').hide();
            $('.prog-word').empty();
        //
        let x = 0;
        var l = mass.map(i=>x+=i, x=0).reverse()[0]
        console.log(l);
        if(l === undefined){
            $('.area').show();
        }else if(l < 7){
            $('.area').show();
        }else if(l < 14){
            $('.design-test').show();
        }else if(l < 21){
            $('.web-test').show();
        }else if(l < 28){
            $('.prog-test').show();
        }else if(l === 28){
            $('.si').show();
        }
        $('.btn-back').click(function(){
            l = [];
            $('.area').hide();
            $('.btn-back').hide();
            $('.first-qst').show();
            $('.area').empty();
            $('.prog-bar, .prog-el').show();
            $('.prog-el').width("0px");
            $('.prog-word').empty();
            $('.prog-word').append("01");
        })
    });
    }
    render() {
        return (
            <div className="testWrap">
            <div className="container text-center">
                <h2 className="h2 text-uppercase h2-start animate__animated animate__fadeInLeft">Тест "Кто вы из мира IT?"</h2>
            <div className="w-100 p-3 start-bg animate__animated animate__fadeInRight">
                <button className="btn btn-danger btn-lg start-test" >Начать тест</button>
            </div>
            <div className="test">
            <div className="first-qst position-relative">
                <h3 className="h3s">Какой урок у вас был любимым в школе?</h3>
                <div className="lbl">
                    <div className="custom-control custom-radio">
                        <input className="custom-control-input" type="radio" name="radio1" id="radio1" value="option1" />
                        <label className="custom-control-label" htmlFor="radio1">
                            Физкультура
                        </label>
                    </div>
                    <div className="custom-control custom-radio">
                        <input className="custom-control-input" id="radio2" type="radio" name="radio1" />
                        <label className="custom-control-label" htmlFor="radio2">
                            Литература
                        </label>
                    </div>
                    <div className="custom-control custom-radio">
                        <input className="custom-control-input" id="radio3" type="radio" name="radio1" />
                        <label className="custom-control-label" htmlFor="radio3">
                            Математика
                        </label>
                    </div>
                    <div className="custom-control custom-radio">
                        <input className="custom-control-input" id="radio4" type="radio" name="radio1" />
                        <label className="custom-control-label" htmlFor="radio4">
                            ИЗО
                        </label>
                    </div>
                </div>
                <div>
                    <button className="btn btn-danger btn-lg btn-1 mt-3">Далее</button>
                </div>
                <div className="prog-word"></div>
            </div>
            <div className="second-qst position-relative">
                <h3 className="h3s">Какие хобби у вас сейчас?</h3>
                <div className="lbl">
                    <div className="custom-control custom-radio">
                        <input className="custom-control-input" id="radio5" type="radio" name="radio2" />
                        <label className="custom-control-label" htmlFor="radio5">
                            Кроссворды и книги
                        </label>
                    </div>
                    <div className="custom-control custom-radio">
                    <input className="custom-control-input" id="radio6" type="radio" name="radio2" />
                        <label className="custom-control-label" htmlFor="radio6">
                            Видеоигры
                        </label>
                    </div>
                    <div className="custom-control custom-radio">
                        <input className="custom-control-input" id="radio7" type="radio" name="radio2" />
                        <label className="custom-control-label" htmlFor="radio7">
                            Автомобили, техника в доме и прочее
                        </label>
                    </div>
                    <div className="custom-control custom-radio">
                        <input className="custom-control-input" id="radio8" type="radio" name="radio2" />
                        <label className="custom-control-label" htmlFor="radio8">
                            Рукоделие
                        </label>
                    </div>
                </div>
                <div>
                    <button className="btn btn-danger btn-lg btn-2 mt-3">Далее</button>
                </div>
                <div className="prog-word"></div>
            </div>
            <div className="third-qst position-relative">
                <h3 className="h3s">Какую литаратуру предпочитаете?</h3>
                <div className="lbl">
                    <div className="custom-control custom-radio">
                        <input className="custom-control-input" id="radio9" type="radio" name="radio3" />
                        <label className="custom-control-label" htmlFor="radio9">
                            Художественную или классическую
                        </label>
                    </div>
                    <div className="custom-control custom-radio">
                        <input className="custom-control-input" id="radio10" type="radio" name="radio3" />
                        <label className="custom-control-label" htmlFor="radio10">
                            Постмодернизм
                        </label>
                    </div>
                    <div className="custom-control custom-radio">
                        <input className="custom-control-input" id="radio11" type="radio" name="radio3" />
                        <label className="custom-control-label" htmlFor="radio11">
                            Научную фантастику
                        </label>
                    </div>
                    <div className="custom-control custom-radio">
                        <input className="custom-control-input" id="radio12" type="radio" name="radio3" />
                        <label className="custom-control-label" htmlFor="radio12">
                            Комиксы
                        </label>
                    </div>
                </div>
                <div>
                    <button className="btn btn-danger btn-lg btn-3 mt-3">Далее</button>
                </div>
                <div className="prog-word"></div>
            </div>
            <div className="fourth-qst position-relative">
                <h3 className="h3s">Вы попали в Магазин игрушек, какую игрушку вы купили бы в первую очередь:</h3>
                <div className="lbl">
                    <div className="custom-control custom-radio">
                        <input className="custom-control-input" id="radio13" type="radio" name="radio4" />
                        <label className="custom-control-label" htmlFor="radio13">
                            Конструктор лего
                        </label>
                    </div>
                    <div className="custom-control custom-radio">
                        <input className="custom-control-input" id="radio14" type="radio" name="radio4" />
                        <label className="custom-control-label" htmlFor="radio14">
                            Лабораторию
                        </label>
                    </div>
                    <div className="custom-control custom-radio">
                        <input className="custom-control-input" id="radio15" type="radio" name="radio4" />
                        <label className="custom-control-label" htmlFor="radio15">
                            Программируемую игрушку
                        </label>
                    </div>
                    <div className="custom-control custom-radio">
                        <input className="custom-control-input" id="radio16" type="radio" name="radio4" />
                        <label className="custom-control-label" htmlFor="radio16">
                            Мозайку
                        </label>
                    </div>
                </div>
                <div>
                    <button className="btn btn-danger btn-lg btn-4 mt-3">Далее</button>
                </div>
                <div className="prog-word"></div>
            </div>
            <div className="fifth-qst position-relative">
                <h3 className="h3s">В Вашей школе ставится спектакль, какую роль в этом процессе вы выберете для себя:</h3>
                <div className="lbl">
                    <div className="custom-control custom-radio">
                        <input className="custom-control-input" id="radio17" type="radio" name="radio5" />
                        <label className="custom-control-label" htmlFor="radio17">
                            Сценарист
                        </label>
                    </div>
                    <div className="custom-control custom-radio">
                        <input className="custom-control-input" id="radio18" type="radio" name="radio5" />
                        <label className="custom-control-label" htmlFor="radio18">
                            Режиссер-постановщик
                        </label>
                    </div>
                    <div className="custom-control custom-radio">
                        <input className="custom-control-input" id="radio19" type="radio" name="radio5" />
                        <label className="custom-control-label" htmlFor="radio19">
                            Декоратор
                        </label>
                    </div>
                    <div className="custom-control custom-radio">
                        <input className="custom-control-input" id="radio20" type="radio" name="radio5" />
                        <label className="custom-control-label" htmlFor="radio20">
                            Исполнитель главной роли
                        </label>
                    </div>
                </div>
                <div>
                    <button className="btn btn-danger btn-lg btn-5 mt-3">Далее</button>
                </div>
                <div className="prog-word"></div>
            </div>
            <div className="sixth-qst position-relative">
                <h3 className="h3s">Выберите одно верное утверждение. Мне нравится решать задачи, требующие:</h3>
                <div className="lbl">
                    <div className="custom-control custom-radio">
                        <input className="custom-control-input" id="radio21" type="radio" name="radio6" />
                        <label className="custom-control-label" htmlFor="radio21">
                            Умение считать(математические задачи)
                        </label>
                    </div>
                    <div className="custom-control custom-radio">
                        <input className="custom-control-input" id="radio22" type="radio" name="radio6" />
                        <label className="custom-control-label" htmlFor="radio22">
                            Логически мыслить
                        </label>
                    </div>
                    <div className="custom-control custom-radio">
                        <input className="custom-control-input" id="radio23" type="radio" name="radio6" />
                        <label className="custom-control-label" htmlFor="radio23">
                            Внимательности и способности находить отличия
                        </label>
                    </div>
                    <div className="custom-control custom-radio">
                        <input className="custom-control-input" id="radio24" type="radio" name="radio6" />
                        <label className="custom-control-label" htmlFor="radio24">
                            Креативности и воображения
                        </label>
                    </div>
                </div>
                <div>
                    <button className="btn btn-danger btn-lg btn-6 mt-3">Далее</button>
                </div>
                <div className="prog-word"></div>
            </div>
            <div className="seventh-qst position-relative">
                <h3 className="h3s">Вид спорта, который для вас наиболее привлекательный:</h3>
                <div className="lbl">
                    <div className="custom-control custom-radio">
                        <input className="custom-control-input" id="radio25" type="radio" name="radio7" />
                        <label className="custom-control-label" htmlFor="radio25">
                            Шахматы
                        </label>
                    </div>
                    <div className="custom-control custom-radio">
                        <input className="custom-control-input" id="radio26" type="radio" name="radio7" />
                        <label className="custom-control-label" htmlFor="radio26">
                            Футбол
                        </label>
                    </div>
                    <div className="custom-control custom-radio">
                        <input className="custom-control-input" id="radio27" type="radio" name="radio7" />
                        <label className="custom-control-label" htmlFor="radio27">
                            Единоборства
                        </label>
                    </div>
                    <div className="custom-control custom-radio">
                        <input className="custom-control-input" id="radio28" type="radio" name="radio7" />
                        <label className="custom-control-label" htmlFor="radio28">
                            Ролики
                        </label>
                    </div>
                </div>
                <div>
                    <button className="btn btn-danger btn-lg btn-7 mt-3">Далее</button>
                </div>
                <div className="prog-word"></div>
            </div>

            <div className="area">
                <p>Вы ответили не на все вопросы</p>
                <button className="btn btn-danger btn-lg btn-back">Начать сначала</button>
            </div>

            <div className="design-test">
                <h3>Вы Дизайнер</h3>
                <p>
                    Ваше призвание быть художником-конструктором, человеком, занимающимся художественно-технической деятельностью в разных отраслях (в том числе архитектура, проектирование, иллюстрирование, дизайн плакатной и прочей рекламной графики, веб-дизайн)
                </p>
                <NavLink to="/Cours"><button className="btn btn-danger btn-lg">Подобрать курсы</button></NavLink>
            </div>

            <div className="web-test">
                <h3>Вы Web-разработчик</h3>
                <p>
                    Ваше призвание быть специалистом занимающимся написанием, обновлением, исправлением и совершенствованием алгоритмов для приложений, сайтов и отдельных элементов, с использованием разных языков программирования. Результат работы веб-разработчика — это интуитивно понятные и дружелюбные для пользователя цифровые продукты, которые мы используем в повседневной жизни.
                </p>
                <NavLink to="/Cours"><button className="btn btn-danger btn-lg">Подобрать курсы</button></NavLink>
            </div>

            <div className="prog-test">
                <h3>Вы Программист</h3>
                <p>
                    Ваше призвание это программирование, вы можете стать специалистом, занимающимся программированием, то есть созданием компьютерных программ. Программирование, как род занятий, может быть основной профессиональной деятельностью, либо вспомогательной, при решении других задач, а также хобби.
                </p>
                <NavLink to="/Cours"><button className="btn btn-danger btn-lg">Подобрать курсы</button></NavLink>
            </div>

            <div className="si">
                <h3>Вы Системный Администратор</h3>
                <p>
                Ваше призванние это системная инженерия, вы можете стать специалистом, который следит за стабильностью системы, досконально ее знает и может решить проблему инфраструктуры, но не кода. SRE-инженер — это программист с навыками администрирования.
                </p>
                <NavLink to="/Cours"><button className="btn btn-danger btn-lg">Подобрать курсы</button></NavLink>
            </div>

            <div className="prog-bar"><div className="prog-el"></div></div>
            </div>
            </div>
            </div>
        )
    }
}

export default Test;