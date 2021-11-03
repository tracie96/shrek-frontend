import React, { useState } from 'react'
import Book from '../Home_Component/single_book_component'
import Books from './books_component'

export default function ProgBooks({books}) {
    const [category, setCategory]= useState('')
    console.log(books)
    const largeGroup = books.filter(activity => (activity.category == 'Programming'));
      return (
          <div class="row">
          { largeGroup.map((book) => (
                      <div class="col-xl-4 col-lg-4 col-md-6">
                      <div class="single-course mb-70">
                          <div class="course-img">
                              <img src={book.imageLink} alt=""/>
                          </div>
                          <div class="course-caption">
                              <div class="course-cap-top">
                                  <h4><a href="#">{book.title}</a></h4>
                                  <p>Author :{book.author}</p>

                              </div>
                              <div class="course-cap-mid d-flex justify-content-between">
                                  <div class="course-ratting">
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                  </div>
                                  <ul><li>0 Review</li></ul>
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
}
