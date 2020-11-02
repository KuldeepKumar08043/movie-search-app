import './App.css';
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router,Route,} from "react-router-dom";
import { useState } from 'react';
import Card from './Components/Card/Card';
import Header from './Components/Header/Header';
import Favorites from './Components/Favorites/Favorites';

function App() {

  const [list, setList] = useState('');
  const [type, setType] = useState('all');
  const [ inputVal, setInputVal ] = useState('');
  const [ fav, setFav ] = useState('');

  const handleSearchData = () => {
    const getJson = async () => {
      try {
        const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=bf3783aa&type=${type}&t=${inputVal}`);
        const myJson = await response.json();
        console.log('myJson - ', myJson);
        setList(myJson);
      }
      catch (error) {
        console.error('Something went wrong', error);
      }
    }
    getJson();
  }

  const changeHandler = (event) => {
    setType(event.target.value);
  }

  const changeInputHandler = (event) => {
    setInputVal(event.target.value);
  }

  const favHandlerEvent = () => {
    setFav(list);
    console.log(fav);
  }

  return (
    <div className="App">
      <Router>
      <Header fav={fav} />
        <Route path="/" component={App}>
          <Route path="home" component={App}></Route>
          <Route path="favorites" component={Favorites}></Route>
        </Route>
      </Router>
      <div>
      <form className="search-form">
        <input type="text" id="name" onChange={changeInputHandler} value={inputVal.value} name="name" placeholder="Search" />      
          <select className="types" onChange={changeHandler} value={list.value}>
            <option value="movies">Movies</option>
            <option value="series">Series</option>
            <option value="Episodes">Episodes</option>
          </select>
            <Button type="button" className="searchBtn" onClick={handleSearchData}>Search</Button>
        </form>
      </div>
            <div>
              <h1 className="card-heading">{list.Type}</h1>
              <Card cards={list} favHandler={favHandlerEvent} />
            </div>
    </div>
  );
}

export default App;
