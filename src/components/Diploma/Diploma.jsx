import React from 'react';
import $ from "jquery";
import diplom from './Diploma.module.css';
import diplomaPhoto from '../../img/diploma.png';

const Diploma = () => {
    $(function() {
        $(window).on("scroll resize", function() {
            $('#diploma h2').each(function(){
                let imagePos = $(this).offset().top;
        
                let topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__jackInTheBox");
                }
            });
            $('.diplomaImg, #diploma span').each(function(){
                let imagePos = $(this).offset().top;
        
                let topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__fadeInLeft");
                }
            });
            $('#diploma p').each(function(){
                let imagePos = $(this).offset().top;
        
                let topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__fadeInRight");
                }
            });
        });
    })
    return (
        <section className={`text-center diploma ${diplom.diploma}`} id="diploma">
            <div className="container">
                <h2 className="text-uppercase animate__animated">
                    Диплом по окончанию Школы
                </h2>
                <img src={diplomaPhoto} alt="Диплом" className="diplomaImg animate__animated"/>
                <p className="animate__animated">
                    Сдав выпускные экзамены, написав дипломный проект, выпускники получают Диплом установленного образца с присвоенной квалификацией специалиста.
                </p>
                <span className="d-block mx-auto animate__animated">
                    Данный Диплом котируется у работодателей и открывает любые двери как в России так и за рубежом перед выпускником Высшей Школы Программирования!
                </span>
            </div>
        </section>
    )
}

export default Diploma;