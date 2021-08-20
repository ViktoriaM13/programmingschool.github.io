import React from 'react';
import $ from "jquery";
import kidsQuestionStyle from './ITKidsQuestion.module.css';
import checkMark from '../../img/check-mark.svg';

const ITKidsQuestion = () => {
    $(function() {
        $(window).on("scroll resize", function() {
            $('.kidsQuestion h2').each(function(){
                let imagePos = $(this).offset().top;
        
                let topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__jackInTheBox");
                }
            });
            $('.kidsQuestionItemProf').each(function(){
                let imagePos = $(this).offset().top;
        
                let topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__fadeInLeft");
                }
            });
            $('.kidsQuestionItemLite').each(function(){
                let imagePos = $(this).offset().top;
        
                let topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__fadeInRight");
                }
            });
        });
    })
    return (
        <section className={`text-center kidsQuestion ${kidsQuestionStyle.kidsQuestion}`} id="kidsQuestion">
            <div className="container">
                <h2 className="text-uppercase animate__animated">
                    #ЛАЙТ ИЛИ #ПРОФИ ?
                </h2>
                <div className="d-flex justify-content-center align-items-center mb-3 kidsQuestionItemProf animate__animated">
                    <img src={checkMark} alt="Галочка" className="animate__animated animate__rubberBand animate__infinite animate__slow"/>
                    <p className="mb-0">
                        #ПРОФИ занятия проходят ср чт пт по 4 часа&nbsp;/ смена июнь или июль
                    </p>
                </div>
                <div className="d-flex justify-content-center align-items-center kidsQuestionItemLite animate__animated">
                    <img src={checkMark} alt="Галочка" className="animate__animated animate__rubberBand animate__infinite animate__slow"/>
                    <p className="mb-0">
                        #ЛАЙТ занятия ср и пт по 1,5 часа&nbsp;/ июнь, июль и&nbsp;август
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ITKidsQuestion;