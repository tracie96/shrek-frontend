import React from 'react'
import testimonial_one from "../../assets/img/gallery/testimonial.png";
import gallery_one from "../../assets/img/gallery/about2.png"
import gallery_two from "../../assets/img/gallery/about2.png"

export default function About() {
    return (
    <main>
        <div class="slider-area">
            <div class="slider-height2 d-flex align-items-center">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="hero-cap hero-cap2 text-center">
                                <h2>About Us</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  
        <div class="about-details section-padding30">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="about-details-cap mb-50">
                            <h4>Our Mission</h4>
                            <p>Training
We deliver an intensive 6-month program where our software developers learn both full-stack software development and additional soft skills in an immersive environment. Through an agile delivery methodology, mentor matching and leadership modules, our elite engineers are equipped with techniques and a leadership mindset that enables them to work competitively in any team globally.
                            </p>
                            <p> At Decagon Institute, we believe that the student’s well-being is crucial to their success in our training program.

As a result, we provide our decadevs with laptops, accommodation, meal allowance and a stipend to ensure they are focused and in the best position to thrive.</p>
                        </div>

                        <div class="about-details-cap mb-50">
                            <h4>Our Vision</h4>
                            <p>As part of our curriculum, we expose our engineers to real-life applications and projects. During these projects, we ensure they are well-equipped to design programs both individually and in teams. This aspect of our program provides our engineers with verifiable work experience and the confidence to excel in their jobs after graduation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
 
  
        <div class="about-area section-padding2">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-12">
                        <div class="about-caption mb-50">
                            <div class="section-tittle mb-35">
                                <span>More About Our Company</span>
                                <h2>Want to know more</h2>
                            </div>
                            <p>I worked in the accounts department of a hotel before starting at Decagon. My experience at Decagon has been really challenging and the same time refreshing because I get to learn new problem-solving concepts and techniques everyday. 
                                It's a six months of dedication and sacrifice which will definitely be rewarding, you can do it.</p>
                            <ul>
                                <li><span class="flaticon-business"></span> Creative ideas base</li>
                                <li><span class="flaticon-communications-1"></span> Projects</li>
                                <li><span class="flaticon-graduated"></span> Internships</li>
                                <li><span class="flaticon-tools-and-utensils"></span> Placement</li>
                            </ul>
                            <a href="about.html" class="btn">More About Us</a>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="about-img ">
                            <div class="about-font-img d-none d-lg-block">
                                <img src={gallery_one} alt=""/>
                            </div>
                            <div class="about-back-img ">
                                <img src={gallery_two} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    )
}
