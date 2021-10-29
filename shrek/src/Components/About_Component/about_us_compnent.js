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
                            <p>Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.
                            </p>
                            <p> Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan.</p>
                        </div>

                        <div class="about-details-cap mb-50">
                            <h4>Our Vision</h4>
                            <p>Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.
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
                            <p>There arge many variations ohf passages of sorem gpsum ilable, but the majority have suffered alteration in some form, by ected humour, or randomised words whi.</p>
                            <ul>
                                <li><span class="flaticon-business"></span> Creative ideas base</li>
                                <li><span class="flaticon-communications-1"></span> Assages of sorem gpsum ilable</li>
                                <li><span class="flaticon-graduated"></span> Have suffered alteration in so</li>
                                <li><span class="flaticon-tools-and-utensils"></span> Randomised words whi</li>
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
