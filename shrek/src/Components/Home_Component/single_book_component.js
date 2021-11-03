import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import pop_one from '../../assets/img/gallery/popular_sub1.png'

export default function Book({ books, loader }) {
    console.log(loader)
  if (loader) {
      return(<p>Loading</p>)
  }
    return (
        <div class="row">
        { books.map((book) => (
                    <div class="col-xl-4 col-lg-4 col-md-6">
                    <div class="single-course mb-70">
                        <div class="course-img">
                            <img src={pop_one} alt=""/>
                        </div>
                        <div class="course-caption">
                            <div class="course-cap-top">
                                <h4><a href="#">{book.title}</a></h4>
                            </div>
                            <div class="course-cap-mid d-flex justify-content-between">
                                <div class="course-ratting">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <ul><li>52 Review</li></ul>
                            </div>
                            <div class="course-cap-bottom d-flex justify-content-between">
                                <ul>
                                    <li><i class="ti-user"></i> 562</li>
                                    <li><i class="ti-heart"></i> 562</li>
                                </ul>
                                <span>Free</span>
                            </div>
                        </div>
                    </div>
                </div>
        ))}
      </div>
    );

  // })
}
