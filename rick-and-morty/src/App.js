import './App.scss';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from './components/Cards/Cards';

// API personajes: https://rickandmortyapi.com/api/character
// API localizacion: https://rickandmortyapi.com/api/location

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character")
      .then(res => {
        setPosts(res.data.results);
      })
      .catch(err => alert(`Error! ${err}`));
  }, []);

  // const getData = async () => {
  //   try{
  //     const res = await axios.get("https://rickandmortyapi.com/api/character");
  //     console.log(res.data.results)
  //     setPosts(res.data.results);
  //   }catch(err) {
  //     alert(`Error getting users: ${err}`);
  //   }
  // };

  // useEffect(() => {
  //   getData();
  // }, [posts]);

  return (
    <section className="content">
      {
        posts.map(post => {
          return (
            <Cards key={post.id} name={post.name} species={post.species} status={post.status} img={post.image}>
              {console.log(post.image)}
            </Cards>
          )
        })
      }
    </section>
  );
}

export default App;
