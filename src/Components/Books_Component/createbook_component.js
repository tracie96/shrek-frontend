import React from 'react'
import { Container } from 'react-bootstrap'
import axios from 'axios';
import {useEffect, useState} from 'react';

export default function CreateBook() {
    const [formValue, setformValue] = React.useState({
        title: '',
        category: '',
        author:'',
        imageLink:'',
        pages:'',
        year:'',
        link:''

      });
      const [successmessage, setSuccess]=useState('')

      const handleSubmit = (event) => {
          event.preventDefault()
          const loginFormData = new FormData();
          loginFormData.append("title", formValue.title)
          loginFormData.append("category", formValue.category)
          loginFormData.append("author", formValue.author)
          loginFormData.append("imageLink", formValue.imageLink)
          loginFormData.append("pages", formValue.pages)
          loginFormData.append("year", formValue.year)
          loginFormData.append("link", formValue.link)

   
        try {
            const response = axios({
              method: "post",
              url: "https://shrek-ruby-on-rails-api.herokuapp.com/api/v1/books",
              data: loginFormData,
              headers: { "Content-Type": "multipart/form-data" },
            });
            if(response){
                console.log("yes")
                const successmsg ="Book Created Successfully"
                setSuccess(successmsg)
                        
            }
          } catch(error) {
            console.log(error)
          }
        

    }
      const handleChange = (event) => {
        setformValue({
          ...formValue,
          [event.target.name]: event.target.value
        });
      }
    
    return (

        <main>
        <div class="slider-area ">
            <div class="slider-height2 d-flex align-items-center">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="hero-cap hero-cap2 text-center">
                                <h2>Create Books</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section class="all-course section-padding30">
            <div class="container">
                <div class="row">
                    <div class="all-course-wrapper" style={{width:"100%"}}>
                    <div class="row">
                    <div class="col-12">
                        <h2 class="contact-title">Get in Touch</h2>
                    </div>
                    <div class="col-lg-12">
                        <form class="form-contact contact_form" onSubmit={handleSubmit} novalidate="novalidate">
                        {successmessage?<div class='alert alert-success alert-dismissible fade ' role='alert' dismissa>{successmessage}</div>:null}
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <input class="form-control valid" name="title" value={formValue.title} onChange={handleChange} type="text" onfocus="this.placeholder = ''" placeholder="Enter your title"/>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <input class="form-control valid" name="category" value={formValue.category} onChange={handleChange} type="text" onfocus="this.placeholder = ''"  placeholder="Enter Category"/>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <input class="form-control valid" name="author" value={formValue.author} onChange={handleChange} type="text" onfocus="this.placeholder = ''"  placeholder="Enter your Author"/>
                                    </div>
                                </div>
                          
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <input class="form-control valid" name="imageLink" value={formValue.imageLink} onChange={handleChange} type="text" onfocus="this.placeholder = ''"  placeholder="Enter your ImageLink"/>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="form-group">
                                        <input class="form-control valid" name="pages" value={formValue.pages} onChange={handleChange}  type="text" onfocus="this.placeholder = ''"  placeholder="Enter your Pages"/>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="form-group">
                                        <input class="form-control valid" name="year" value={formValue.year} onChange={handleChange} type="text" onfocus="this.placeholder = ''" placeholder="Enter Year Pulished"/>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="form-group">
                                        <input class="form-control valid" name="link" value={formValue.link} onChange={handleChange} type="text" onfocus="this.placeholder = ''" placeholder="Upload Pdf"/>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group mt-3">
                                <button type="submit" class="button button-contactForm boxed-btn">Send</button>
                            </div>
                        </form>
                    </div>
              
                </div>
                     
                            </div>
                        </div>
                    </div>
        </section>
    </main>
    )
}
