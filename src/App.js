import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';
import Header from './Components/Home_Component/header_component'
import Home from './Components/Home_Component/home_component'
import About from './Components/About_Component/about_us_compnent'
import Books from './Components/Books_Component/books_component'
import Author from './Components/Author_Component/author_component'
import NotFound from './Components/NotFound/404'

function App() {

  const url ="https://shrek-ruby-on-rails-api.herokuapp.com/api/v1/books";
  const [loader, setLoader] = useState(false);;
  const [books, getBooks] = useState([]);

  const getAllBooks =async()=>{
    setLoader(true)
    await axios.get(`${url}`).then((response)=>{
      const allBooks = response.data;
      getBooks(allBooks.data)
      setLoader(false)
    })
    .catch((e)=>{
      setLoader(false)
    })
  }
  console.log(books)
  useEffect(() => {
    getAllBooks();
  }, [])

  const popular_books= books.slice(24,30)
console.log("arr",popular_books)
  return (
    <div className="App">
    <Router>
      <Header/>
      <Switch>
        <Route exact path='/'>
          <Home books={popular_books} loader={loader}></Home>
        </Route>
        <Route exact path='/about'>
          <About></About>
        </Route>
        <Route exact path='/books'>
          <Books books={books}></Books>
        </Route>
        <Route exact path='/authors'>
          <Author books={books}></Author>
        </Route>

        <Route path="*"><NotFound></NotFound></Route>
        </Switch>

    </Router>      
    </div>
  );
}

export default App;
