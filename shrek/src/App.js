import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
// import '../src/assets/css/style.css';
import Header from './Components/Home_Component/header_component'
import Home from './Components/Home_Component/home_component'
import About from './Components/About_Component/about_us_compnent'
import Books from './Components/Books_Component/books_component'
import Author from './Components/Author_Component/author_component'
import NotFound from './Components/NotFound/404'
// import Courses from './components/screen/Login'
// import Profile from './components/screen/Profile'
// import CreatePost from './components/screen/CreatePost'
function App() {
  return (
    <div className="App">
    <Router>
      <Header/>
      <Switch>

        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route exact path='/about'>
          <About></About>
        </Route>
        <Route exact path='/books'>
          <Books></Books>
        </Route>
        <Route exact path='/author'>
          <Author></Author>
        </Route>

        <Route path="*"><NotFound></NotFound></Route>
        </Switch>

    </Router>      
    </div>
  );
}

export default App;
