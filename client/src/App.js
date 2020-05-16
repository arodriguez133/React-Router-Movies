import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movies from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState( [] );


  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
        <SavedList list={savedList} />
        <Route  exact path = "/" component = {MovieList}/>
        <Route path = "/movies/:id" component = {Movies}/>
        {/* <Route path ="/movies/:id" component ={Movies}/> */}
    </div>
  );
};

export default App;
