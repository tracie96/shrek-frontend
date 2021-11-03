import React from 'react'
import banner from "../../assets/img/hero/heroman.png";
import popular_one from "../../assets/img/gallery/popular_sub1.png";
import popular_two from "../../assets/img/gallery/popular_sub2.png";
import popular_three from "../../assets/img/gallery/popular_sub3.png";
import databg from '../../assets/img/gallery/section_bg02.png';
import team_one from "../../assets/img/gallery/team1.png";
import team_two from "../../assets/img/gallery/team2.png"
import team_three from "../../assets/img/gallery/team3.png"
import team_four from "../../assets/img/gallery/team4.png"
import about_one from "../../assets/img/gallery/about1.png"
import about_two from "../../assets/img/gallery/about2.png"
import Book from "./single_book_component"

export default function Content({books,loader}) {
    console.log("log",books)

    return (
    <main>
        <div className="slider-area ">
            <div className="slider-active">
                <div className="single-slider slider-height align-items-center">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-7 col-md-8">
                                <div className="hero__caption">
                                    <h1 data-animation="fadeInLeft" data-delay=".4s">The New Way To Learn Properly in With Us!</h1>
                                    <div className="hero__btn">
                                        <a href="industries.html" className="btn hero-btn"  data-animation="fadeInLeft" data-delay=".8s">Get Started</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-5">
                                <div className="hero-man d-none d-lg-block f-right" data-animation="jello" data-delay=".4s">
                                    <img src={banner} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="categories-area section-padding30">
            <div className="container">
                <div className="row justify-content-sm-center">
                    <div className="cl-xl-7 col-lg-8 col-md-10">
                        <div className="section-tittle text-center mb-70">
                            <span>Popular Online Courses</span>
                            <h2>Lets Browse All Catagories</h2>
                        </div> 
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-cat mb-50">
                            <div className="cat-icon">
                                <span className="flaticon-web-design"></span>
                            </div>
                            <div className="cat-cap">
                                <h5><a  href="#">Web Design</a></h5>
                                <p>Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod tempor incidi.</p>
                                <a href="#" className="read-more1">Read More </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-cat mb-50">
                            <div className="cat-icon">
                                <span className="flaticon-education"></span>
                            </div>
                            <div className="cat-cap">
                                <h5><a  href="#">App Development</a></h5>
                                <p>Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod tempor incidi.</p>
                                <a  href="#" className="read-more1">Read More</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-cat mb-50">
                            <div className="cat-icon">
                                <span className="flaticon-communications"></span>
                            </div>
                            <div className="cat-cap">
                                <h5><a  href="#">Video Editing</a></h5>
                                <p>Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod tempor incidi.</p>
                                <a  href="#" className="read-more1">Read More </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-cat mb-50">
                            <div className="cat-icon">
                                <span className="flaticon-computing"></span>
                            </div>
                            <div className="cat-cap">
                                <h5><a  href="#">Digital Marketing</a></h5>
                                <p>Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod tempor incidi.</p>
                                <a  href="#" className="read-more1">Read More</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-cat mb-50">
                            <div className="cat-icon">
                                <span className="flaticon-tools-and-utensils"></span>
                            </div>
                            <div className="cat-cap">
                                <h5><a  href="#">Seo Marketing</a></h5>
                                <p>Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod tempor incidi.</p>
                                <a  href="#" className="read-more1">Read More</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-cat mb-50">
                            <div className="cat-icon">
                                <span className="flaticon-business"></span>
                            </div>
                            <div className="cat-cap">
                                <h5><a  href="#">Content Writing</a></h5>
                                <p>Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod tempor incidi.</p>
                                <a  href="#" className="read-more1">Read More </a>
                            </div>
                        </div>
                    </div>



                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="browse-btn2 text-center mt-50">
                            <a href="courses.html" className="btn">Find More Courses</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="popular-course section-padding30">
            <div className="container">
                <div className="row justify-content-sm-center">
                    <div className="cl-xl-7 col-lg-8 col-md-10">
                        <div className="section-tittle text-center mb-70">
                            <span>Most Popular Course Of This Week</span>
                            <h2>Our Popular Course</h2>
                        </div> 
                    </div>
                </div>
                <div className="row">

                
                  <Book books={books} loader={loader}></Book>


                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="browse-btn2 text-center mt-50">
                            <a href="courses.html" className="btn">Find More Courses</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    







        <div className="team-area pt-160 pb-160 section-bg" data-background={databg}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="cl-xl-7 col-lg-8 col-md-10">
                        <div className="section-tittle section-tittle2 text-center mb-70">
                            <span>More About Our Faculty</span>
                            <h2>Our Best Teachers</h2>
                        </div> 
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-team mb-30">
                            <div className="team-img">
                                <img src={team_one} alt=""/>
                                <ul className="team-social">
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fas fa-globe"></i></a></li>
                                </ul>
                            </div>
                            <div className="team-caption">
                                <h3><a href="instructor.html">Alexa Janathon</a></h3>
                                <p>Faculty</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-team mb-30">
                            <div className="team-img">
                                <img src={team_two} alt=""/>
                                <ul className="team-social">
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fas fa-globe"></i></a></li>
                                </ul>
                            </div>
                            <div className="team-caption">
                                <h3><a href="instructor.html">Janathon Smith</a></h3>
                                <p>Faculty</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-team mb-30">
                            <div className="team-img">
                                <img src={team_three} alt=""/>
                                <ul className="team-social">
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fas fa-globe"></i></a></li>
                                </ul>
                            </div>
                            <div className="team-caption">
                                <h3><a href="instructor.html">Alexa MacCalum</a></h3>
                                <p>Faculty</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-team mb-30">
                            <div className="team-img">
                                <img src={team_four} alt=""/>
                                <ul className="team-social">
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fas fa-globe"></i></a></li>
                                </ul>
                            </div>
                            <div className="team-caption">
                                <h3><a href="instructor.html">Alexa j Watson</a></h3>
                                <p>Faculty</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="browse-btn2 text-center mt-70">
                            <a href="instructor.html" className="btn white-btn">View All Faculty</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <div className="about-area section-padding2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-caption mb-50">
                            <div className="section-tittle mb-35">
                                <span>More About Our Company</span>
                                <h2>Want to know more</h2>
                            </div>
                            <p>There arge many variations ohf passages of sorem gpsum ilable, but the majority have suffered alteration in some form, by ected humour, or randomised words whi.</p>
                            <ul>
                                <li><span className="flaticon-business"></span> Creative ideas base</li>
                                <li><span className="flaticon-communications-1"></span> Assages of sorem gpsum ilable</li>
                                <li><span className="flaticon-graduated"></span> Have suffered alteration in so</li>
                                <li><span className="flaticon-tools-and-utensils"></span> Randomised words whi</li>
                            </ul>
                            <a href="about.html" className="btn">More About Us</a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="about-img ">
                            <div className="about-font-img d-none d-lg-block">
                                <img src={about_one} alt=""/>
                            </div>
                            <div className="about-back-img ">
                                <img src={about_two} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </main>
    )
}
