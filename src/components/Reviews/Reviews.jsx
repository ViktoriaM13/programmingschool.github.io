import React from 'react';
import $ from "jquery";
import reviews from './Reviews.module.css';
import girlWithABook from '../../img/girl-with-a-book.svg';

const Reviews = () => {
    $(function() {
        let offsetTopReviews = $('#reviews').offset().top;
        if ($('#reviews')[0] && offsetTopReviews < 300) {
            $('#reviews').addClass(`${reviews.reviewsPage}`);
            $('#reviews h2').each(function(){
                $(this).addClass("animate__jackInTheBox");
            });
            $('#reviews img').each(function(){
                $(this).addClass("animate__fadeInLeft");
            });
            $('#reviews .reviews-block').each(function(){
                $(this).addClass("animate__fadeInRight");
            });
        }
        $(window).on("scroll resize", function() {
            $('#reviews h2').each(function(){
                let imagePos = $(this).offset().top;
    
                let topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__jackInTheBox");
                }
            });
            $('#reviews img').each(function(){
                let imagePos = $(this).offset().top;
        
                let topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__fadeInLeft");
                }
            });
            $('#reviews .reviews-block').each(function(){
                let imagePos = $(this).offset().top;
        
                let topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__fadeInRight");
                }
            });
        });
    })
    return (
        <section className={`reviews ${reviews.reviews} text-center`} id="reviews">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12">
                        <h2 className="text-uppercase animate__animated">
                            Отзывы
                        </h2>
                    </div>
                    <div className="col-4 offset-1 d-none d-md-block">
                        <img src={girlWithABook} alt="Девушка с кофе" className="img-fluid animate__animated"/>
                    </div>
                    <div className="col-md-6 offset-md-1">
                        <iframe title="reviews" src="https://yandex.ru/maps-reviews-widget/70752027269?comments" className={`${reviews.block} reviews-block border-0 w-100 animate__animated`}></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reviews;