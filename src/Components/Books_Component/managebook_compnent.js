import React from 'react'
import axios from 'axios';
import {Modal,Button, CloseButton} from 'react-bootstrap'
import {useEffect, useState} from 'react';
import { Form } from 'react-bootstrap';

export default function ManageBook({books}) {
    const [show, setShow] = useState(false);
    const [id, setId] = useState('')
    const handleClose = () => setShow(false);
    // const [newbooks,setBook]=useState(books)
    const handleShow= (e) => {
        setShow(true);
        setId(e)
    }
    
    const handleDelete= async(e) => {
        try {
            const response = await axios({
              method: "delete",
              url: `https://shrek-ruby-on-rails-api.herokuapp.com/api/v1/books/${id}`,
            }); 
            console.log("response",response)

            if(response.data.status === 'Success'){
                setShow(false)
                window.location.reload();
                

            }
          } catch(error) {
            console.log(error)
          }
            }
   console.log('id',id)
    return (
        <main>
<div class="slider-area ">
    <div class="slider-height2 d-flex align-items-center">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="hero-cap hero-cap2 text-center">
                        <h2>Manage Books</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="container" style={{width:"1500px"}}>

<section class="all-course section-padding30">
<div class="section-top-border">
        <div class="progress-table-wrap">
            <div class="progress-table">
                <div class="table-head">
                    <div class="serial">#</div>
                    <div class="country">Name</div>
                    <div class="visit">Author</div>
                    <div class="percentage">Category</div>
                    <div class="visit">pages</div>
                    <div class="percentage">year</div>
                    <div class="visit">Created</div>
                    <div class="percentage">Actions</div>
                </div>
                { books.map((book) => (

                <div class="table-row">
                    <div class="serial">{book.id}</div>
                    <div class="country"> <img src={book.imageLink} alt="flag" style={{width:"80%"}}/></div>
                    <div class="visit">{book.author}</div>
                    <div class="percentage">{book.category}</div>
                    <div class="visit">{book.pages}</div>
                    <div class="percentage">{book.year}</div>
                    <div class="visit">{Date(book.created_at)}</div>
                    <div class="percentage" onClick={(e)=>{handleShow(book.id)}}><a href="#" class="genric-btn danger" >Delete</a></div>
                </div>
        ))}

            </div>
        </div>
    </div>
    <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton="x">
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, are you sure you want to delete this book?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDelete}>
            Yes
          </Button>
          <Button variant="primary" onClick={handleClose}>
            I Changed my Mind!
          </Button>
        </Modal.Footer>
      </Modal>
</section>
</div>
</main>
    )
}
