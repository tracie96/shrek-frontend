import React from "react";
import { Link } from 'react-router-dom';
import Preloader from './preloader_component'
export default function Book({ books, loader }) {
  if (loader) {
      return(<Preloader></Preloader>)
  }
    return (
        <div class="row">
        { books.map((book) => (
                      <div class="col-xl-4 col-lg-4 col-md-6">
                      <div class="single-course mb-70">
                          <div class="course-img">

                              <img src={book.imageLink} alt=""/>
                          </div>
                          <div class="course-caption">
                              <div class="course-cap-top">
                                  <h4><a href={book.link}>{book.title}</a></h4>
                                  <p>Author :{book.author}</p>
                                  <p>Category :{book.category}</p>
                                  <p>Pages :{book.pages}</p>

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
                                  
                                  <p>Year :{book.year}</p>
                                  <span>Free</span>
                              </div>
                              <li>
                              <Link
                                    to={{
                                        pathname: "/previewbook",
                                        state: { id: book.id }
                                    }} className="nav-link nav-item active" style={{margin:"0px"}}
                                    >Preview</Link>
                                </li>
                          </div>
                      </div>
                  </div>
        ))}
      </div>
    );

  // })
}
