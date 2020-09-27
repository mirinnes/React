import './App.scss';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from './components/Cards/Cards';

// API personajes: https://rickandmortyapi.com/api/character
// API localizacion: https://rickandmortyapi.com/api/location

function App() {
  const [posts, setPosts] = useState([]);
  const [location, setLocation] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character")
      .then(res => {
        setPosts(res.data.results);
        console.log(`resultado de endpoint character`, res.data.results)
      })
      .catch(err => alert(`Error! ${err}`));
  }, []);


  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/location/")
    .then(res => {
      setLocation(res.data.results);
      console.log(` el resultado de location es :`, res.data.results)
    })
    .catch(err => alert(`Error! ${err}`));
  }, []);

  return (
    <section className="content">
      {
        posts.map(post => {
          //  const characterId = location.find(locationId => post.origin.name === locationId.name || "" );
          // {name:"unknown"}
          // console.log(`el find me da: `, characterId); 
          return (
            <Cards key={post.id} name={post.name} species={post.species} status={post.status} img={post.image} location={post.location.name}>
              {/* location={post.location} */}
            </Cards>
          )
        })
      }
    </section>
  );
}

export default App;
