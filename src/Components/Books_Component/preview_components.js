import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function Preview() {
  const location = useLocation();
  const { id } = location.state;
  const url = `https://shrek-ruby-on-rails-api.herokuapp.com/api/v1/books/${id}`;
  const [loader, setLoader] = useState(false);
  const [books, getBooks] = useState([]);
  const [reviews, getReviews] = useState([]);


  const getAllBooks = async () => {
    setLoader(true);
    await axios
      .get(`${url}`)
      .then((response) => {
        const allBooks = response.data;
        const allReviews = response.data.reviews
        getBooks(allBooks.data);
        getReviews(allReviews)
        setLoader(false);
      })
      .catch((e) => {
        setLoader(false);
      });
  };
  useEffect(() => {
    getAllBooks();
  }, []);
console.log(reviews)
  if (loader) {
    return(<p>Loading</p>)
}
  return (
    <main>
      <div class="slider-area ">
        <div class="slider-height2 d-flex align-items-center">
          <div class="container">
            <div class="row">
              <div class="col-xl-12">
                <div class="hero-cap hero-cap2 text-center">
                  <h2>Book Details</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="blog_area single-post-area section-padding">
        <div class="container">
        {/* { books.map((book) => ( */}
   
          <div class="row">
            <div class="col-lg-8 posts-list">
              <div class="single-post">
                <div class="feature-img">
                  <img
                    class="img-fluid"
                    src={books.imageLink}
                    alt=""
                  />
                </div>
                <div class="blog_details">
                  <h2 style={{ color: "#2d2d2d" }}>
                   {books.title}
                  </h2>
                  <ul class="blog-info-link mt-3 mb-4">
                    <li>
                      <a href="#">
                        <i class="fa fa-user"></i> Author : {books.author}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-comments"></i>{reviews.length}
                      </a>
                    </li>
                  </ul>
                  <p class="excert"></p>
                  <p></p>
                
                  <p>Category : {books.category}</p>
                  <p>Pages : {books.pages}</p>
                  <p>Year : {books.year}</p>
                  <p>Date Created : {books.created_at}</p>

                </div>
              </div>
              <div class="navigation-top">
                <div class="d-sm-flex justify-content-between text-center">
                  <div class="col-sm-4 text-center my-2 my-sm-0">
                  
                  </div>
                  <ul class="social-icons">
                    <li>
                      <a href="https://www.facebook.com/sai4ull">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-dribbble"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-behance"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="comments-area">
              <span class="align-middle">
                        <i class="fa fa-comment"></i>&nbsp;{reviews.length} 
                      </span>&nbsp; Comments
                            <div class="comment-list">
                {reviews?reviews.map((rev)=>(
                <div class="single-comment justify-content-between d-flex">
                <div class="user justify-content-between d-flex">
                    <div class="thumb">
                    <img src="assets/img/comment/comment_1.png" alt="" />
                    </div>
                    <div class="desc">
                        <br></br>
                    <p class="comment">
                       {rev.comment}
                    </p>
                    <div class="d-flex justify-content-between">
                        <div class="d-flex align-items-center">
                        <h5>
                            <a href="#">{rev.name}</a>
                        </h5>
                        <p class="date">{rev.created_at} </p>
                        </div>
                      
                    </div>
                    </div>
                </div>
                </div>              
                  )):(<p>No Reviews</p>)}
                

                </div>
              </div>
              <div class="comment-form">
                <h4>Leave a Reply</h4>
                <form
                  class="form-contact comment_form"
                  action="#"
                  id="commentForm"
                >
                  <div class="row">
                    <div class="col-12">
                      <div class="form-group">
                        <textarea
                          class="form-control w-100"
                          name="comment"
                          id="comment"
                          cols="30"
                          rows="9"
                          placeholder="Write Comment"
                        ></textarea>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <input
                          class="form-control"
                          name="name"
                          id="name"
                          type="text"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <input
                          class="form-control"
                          name="email"
                          id="email"
                          type="email"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <input
                          class="form-control"
                          name="website"
                          id="website"
                          type="text"
                          placeholder="Website"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <button
                      type="submit"
                      class="button button-contactForm btn_1 boxed-btn"
                    >
                      Post Comment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        {/* ))} */}
        </div>
      </section>
    </main>
  );

  // })
}
